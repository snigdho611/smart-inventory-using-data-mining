def cleanData(filename):
    import pandas
    import csv

    

def generateUniqueProductList(filename):
    import pandas
    import csv 

    #Reading file for data, file expected to be of .csv format
    grocery = pandas.read_csv(filename) 

    #Replacing any empty values with a 0, it will not be read later
    grocery = grocery.fillna(0)

    unique = list()

    #Searching in the whole dataframe for unique items: No recurring items will be present in this list
    for i in range(0, len(grocery.index)):
        for j in range(1, len(grocery.iloc[i])):
            if grocery.iloc[i][j] != 0:
                if grocery.iloc[i][j] not in unique:
                    unique.append(grocery.iloc[i][j])

    #Unique list will be a list (Not a dataframe) to store all non-repeating products
    uniquelist = list()
    for i in range(0, len(unique)):
        temp = [i+1, unique[i]]
        uniquelist.append(temp)
    
    # using csv.writer method from CSV package to write .csv file with the uniquelist
    with open('backend/uniqueItems.csv', 'w', newline='') as f:
        write = csv.writer(f)
        write.writerows(uniquelist)
    return uniquelist

filename = 'groceries.csv'
generateUniqueProductList(filename)

