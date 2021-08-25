def prediction_model(pclass,sex,age,sibsp,parch,fare,embarked,title):
    import pickle
    x = [[pclass,sex,age,sibsp,parch,fare,embarked,title]]
    randomforest = pickle.load(open('ocean_app/titanic_model.sav', 'rb'))
    prediction = randomforest.predict(x)
    return prediction