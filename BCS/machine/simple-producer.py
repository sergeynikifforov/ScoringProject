"""
Created on Thu May  9 17:42:25 2019

@author: Wapwolf
"""
from time import sleep
from json import dumps
from kafka import KafkaProducer


if __name__ == '__main__':
    producer = KafkaProducer(bootstrap_servers=['localhost:9092'],
                             value_serializer=lambda x: 
                             dumps(x).encode('utf-8'))
    
    data = {'clientID':'001', 
            'features':[2, 24, 0, 1, 1597, 1, 0, 4, 0, 0,
            4, 2, 54, 0, 1, 2, 0, 2, 1, 0]}
    producer.send('scoring-data', value=data)
    sleep(1)