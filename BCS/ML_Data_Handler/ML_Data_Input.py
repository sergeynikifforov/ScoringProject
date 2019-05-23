import requests
import pickle
import pandas as pd
import numpy as np
import json

# GLOBAL PARAMETERS
URL_INPUT = "http://localhost:8089/inputData"
URL_OUTPUT = "http://localhost:8089/outputData"
old_data = "No data available"

# URLS TO ID GENERATING

URL_INPUT_ALL_TELEPHONE = "http://localhost:8089/telephone"
URL_INPUT_ALL_HOUSING = "http://localhost:8089/housing"
URL_INPUT_ALL_PURPOSE = "http://localhost:8089/purpose"
URL_INPUT_ALL_CREDIT_INFO = "http://localhost:8089/creditInfo"
URL_INPUT_ALL_PROPERTY = "http://localhost:8089/property"
URL_INPUT_ALL_PERSON_CREDIT_INFORMATION_STATUS = "http://localhost:8089/personCreditInformationStatus"
URL_INPUT_ALL_CREDIT_HISTORIES = "http://localhost:8089/creditHistories"
URL_INPUT_ALL_OTHER_INSTALLMENT_PLANS = "http://localhost:8089/otherInstallmentPlans"
URL_INPUT_ALL_PERSON_INFO = "http://localhost:8089/personInfo"
URL_INPUT_ALL_QUALITY = "http://localhost:8089/personQualities"
URL_INPUT_ALL_PREDICT = "http://localhost:8089/predict"


# FUNCTION TO GET INDEX
def get_index(name, url):
    pd_data = pd.read_json(url, orient='columns')
    return max(pd_data[name].values) + 1


# TODO (NEED GLOBAL WHILE)

# GET DATA
while True:
    r = requests.get(URL_INPUT)
    if r.text != old_data:
        break
    r.close()
data = r.json()

# ML CODE LOADING
X = [data['creditHistory'], data['statusOfExistingCheckingAccount'], data['foreignWorker'], data['housing'],
     data['mainJob'], data['otherDebtors'], data['otherInstallmentPlans'], data['personalStatus'],
     data['presentEmploymentSince'], data['property'], data['purpose'], data['savingAccount'],
     data['telephone'], data['sex'], data['age'], data['creditAmount'], data['duration'],
     data['installmentRate'], data['numberOfExistingCreditsAtThisBank'], data['maintenance'],
     data['presentResidenceSince']]

# GENERATE WRIGHT INPUT DATA
f = open("Output_ML_Dict.txt", "r")
converting_dict = dict()
for line in f:
    dict_array = line.split(":")
    dict_array[1] = dict_array[1].strip('\n')
    converting_dict[dict_array[0]] = dict_array[1]
f.close()

# CONVERT X TO WRIGHT FORMAT
for i in range(len(X)):
    if X[i] in converting_dict:
        X[i] = converting_dict[X[i]]
    X[i] = int(X[i])
X = np.array([X])

# GET MODEL
filename = 'finalized_model.sav'
loaded_model = pickle.load(open(filename, 'rb'))

# GET RESULT
result = loaded_model.predict(X)[0]

# GET INDEX
new_telephone_id = get_index("telephone_id", URL_INPUT_ALL_TELEPHONE)
new_housing_id = get_index("housing_id", URL_INPUT_ALL_HOUSING)
new_purpose_id = get_index("purpose_id", URL_INPUT_ALL_PURPOSE)
new_credit_info_id = get_index("credit_info_id", URL_INPUT_ALL_CREDIT_INFO)
new_property_id = get_index("property_id", URL_INPUT_ALL_PROPERTY)
new_person_credit_information_status_id = get_index("person_credit_information_status_id",
                                                    URL_INPUT_ALL_PERSON_CREDIT_INFORMATION_STATUS)
new_credit_histories_id = get_index("credit_history_id", URL_INPUT_ALL_CREDIT_HISTORIES)
new_other_installment_plans_id = get_index("other_installment_plans_id", URL_INPUT_ALL_OTHER_INSTALLMENT_PLANS)
new_person_info_id = get_index("person_info_id", URL_INPUT_ALL_PERSON_INFO)
new_quality_id = get_index("person_qualities_id", URL_INPUT_ALL_QUALITY)
new_predict_id = get_index("predict_id", URL_INPUT_ALL_PREDICT)

# GENERATE OUTPUT JSON
output_dict = dict()

# GENERATE ID'S
output_dict["telephoneId"] = new_telephone_id
output_dict["housingId"] = new_housing_id
output_dict["purposeId"] = new_purpose_id
output_dict["creditInfoId"] = new_credit_info_id
output_dict["propertyId"] = new_property_id
output_dict["personCreditInformationStatusId"] = new_person_credit_information_status_id
output_dict["creditHistoriesId"] = new_credit_histories_id
output_dict["otherInstallmentPlansId"] = new_other_installment_plans_id
output_dict["personInfoId"] = new_person_info_id
output_dict["qualityId"] = new_quality_id
output_dict["predictId"] = new_predict_id


# GET OTHER DATA
for key, val in data.items():
    output_dict[key] = val
output_dict["predict"] = result

# CONVERT TO STRING
for key, val in output_dict.items():
    output_dict[key] = str(val)

# SEND DATA TO SERVER
requests.post(url=URL_OUTPUT, data=json.dumps(output_dict))
