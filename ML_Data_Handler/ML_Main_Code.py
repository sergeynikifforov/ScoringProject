import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import pickle

# IMPORT GRID SEARCH TO IMPROVE MODEL
# from sklearn.model_selection import GridSearchCV

# URL
URL_INPUT_ALL_DATA = "http://localhost:8089/allDataJson"


# CONVERT ALL COLUMNS TO INT DATA
def convert_array(array_):
    new_array_ = [val_ + 1 for val_ in range(len(array_))]
    return new_array_


all_table_data = pd.read_json(URL_INPUT_ALL_DATA, orient='columns')
# print(all_table_data.iloc[0])

# CHANGE DATA WITH STRING TO INT
cols = ['credit_history', 'status_of_existing_checking_account', 'foreign_worker', 'housing', 'main_job',
        'other_debtors', 'other_installment_plan', 'personal_status', 'present_employment', 'property', 'purpose',
        'saving_account', 'telephone', 'sex']

# NEED TO GENERATE NORMAL INPUT DATA
output_dict = dict()
for col in cols:  # Iterate over chosen columns
    array = all_table_data.loc[:, col].unique()
    new_array = convert_array(array)
    all_table_data[col] = all_table_data[col].replace(array, new_array)
    for i in range(len(array)):
        output_dict[array[i]] = new_array[i]

# WRITE OUTER DICT
if 'A95' not in output_dict:
    output_dict['A95'] = max([output_dict['A94'], output_dict['A91'], output_dict['A92'], output_dict['A93']]) + 1
if 'A47' not in output_dict:
    output_dict['A47'] = max([output_dict['A41'], output_dict['A42'], output_dict['A43'], output_dict['A44'],
                              output_dict['A45'], output_dict['A46'], output_dict['A48'], output_dict['A49'],
                              output_dict['A410']]) + 1

f = open("Output_ML_Dict.txt", "w+")
count = 1
for key, val in output_dict.items():
    f.write(str(key) + ":" + str(val))
    if count != len(output_dict):
        f.write("\n")
        count += 1
f.close()

# COLUMNS FOR X
X_cols = ['credit_history', 'status_of_existing_checking_account', 'foreign_worker', 'housing', 'main_job',
          'other_debtors', 'other_installment_plan', 'personal_status', 'present_employment', 'property', 'purpose',
          'saving_account', 'telephone', 'sex', 'age', 'credit_amount', 'duration',
          'installment_rate_in_percentage_of_disposable_income', 'number_of_credit',
          'number_of_people_being_liable_to_provide_maintenance_for', 'present_residence']

# DATA FOR ML
X = all_table_data.loc[:, X_cols].values
y = all_table_data.loc[:, 'prediction'].values

# TRAIN AND TEST DATA
X_train = X[0:800]
X_test = X[800:]
y_train = y[0:800]
y_test = y[800:]

# FIT MODEL
params_new_rf = {'bootstrap': True, 'max_depth': 20, 'min_samples_leaf': 4, 'min_samples_split': 2, 'n_estimators': 50}
clf = RandomForestClassifier(**params_new_rf)
clf.fit(X_train, y_train)

# GET ACCURACY OF MODEL
acc_train = 0
for i in range(len(X_train)):
    if clf.predict([X_train[i]]) == y_train[i]:
        acc_train += 1
print('train accuracy random_forest:', acc_train/len(X_train))
acc_test = 0
for j in range(len(X_test)):
    if clf.predict([X_test[j]]) == y_test[j]:
        acc_test += 1
print('test accuracy random_forest:', acc_test/len(X_test))

# GRID SEARCH
''''
params_rf = {'bootstrap': [True, False], 'max_depth': [1, 2, 5, 10, 20], 'min_samples_leaf': [1, 2, 3, 4, 5, 6, 7],
             'min_samples_split': [2, 5, 10], 'n_estimators': [10, 20, 50, 100, 1000]}

grid_search_rf = GridSearchCV(estimator=clf, param_grid=params_rf, cv=3)
grid_search_rf.fit(X, y)
# GET BEST RESULT AND UPDATE MODEL
print(grid_search_rf.best_params_)
'''

# SAVE MODEL
filename = 'finalized_model.sav'
pickle.dump(clf, open(filename, 'wb'))
