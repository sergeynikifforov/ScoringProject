# -*- coding: utf-8 -*-
"""
Created on Thu May  9 17:43:05 2019

@author: Admin
"""

from time import sleep
from json import loads, dumps
from kafka import KafkaConsumer, KafkaProducer
from joblib import load

# TOPICS NAMES:
origin_topic= 'scoring-data'
destination_topic = 'score'


"""
# Load pre-trained model to predict score

"""
print('Importing trained model...')

model_joblib = 'gridsearchcv.joblib'
try:
    clf = load(model_joblib)
    print('SUCCESS: imported {}'.format(model_joblib))
except FileNotFoundError:
    print('ERROR: No model was found')

"""
# Create Kafka consumer and producer instances:
consumer gets Client ID + features vector
producer sends Client ID + "either"
    "1" if model decides Client shou ld be given credit
    or 
    "0" if model decides Client is not trustworthy
    
"""

# Creating consumer instance
consumer = KafkaConsumer(origin_topic,
                         bootstrap_servers=['localhost:9092'],
                         auto_offset_reset='earliest',
                         enable_auto_commit=True,
                         group_id='my-group',
                         value_deserializer=lambda x: \
                         loads(x.decode('utf-8')))

# Creating producer instance
producer = KafkaProducer(bootstrap_servers=['localhost:9092'],
                         value_serializer=lambda x: 
                         dumps(x).encode('utf-8'))

def income_message_handler(message):
    clientID, features = message['clientID'], [message['features']]
    return clientID, features

def outcome_message_handler(clientID, decision):
    if decision == 1:
        decision = 'Client can be given a credit'
    else:
        decision = 'Client is not suitable for a credit'
    outcome_message = [clientID, decision]
    return outcome_message


"""
# Start listening to the "scoring-data" topic and wait for scoring data to appear
# Then send calculated result to  "score" topic
"""
print('Starting an ML consumer session...')
for income_message in consumer:
    income_message = income_message.value # take only value without message ID
    
    print('Consumed message: {} from {} Kafka topic'.format(income_message, origin_topic))
    
    # strip message into client ID and eatable for model features
    clientID, features = income_message_handler(income_message) 
    
     # calculate score
    score = int(clf.predict(features))
    print('Predicted score: {}... Sendinng machine decision to'.format(score))
    
     # create new message to send
    outcome_message = outcome_message_handler(clientID, score)
    producer.send(destination_topic, value=outcome_message) # send line
    print('Sent message: {} to {} Kafka topic'.format(outcome_message, destination_topic))
    sleep(1) # relax for a little
    