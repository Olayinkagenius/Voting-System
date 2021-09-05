''' Mallam Basiru has 80 cows while Mallam Sanu has 65 cows.

Sanu's daughter is to marry Basiru's son. 

In each of these men traditions, when their children get married, the children are to take 30% of each father's cattles.

How many cows do their children get after they get married?
'''

#Create variables to represent the number of cattles both farmers have
BasiruCows = 80
SanuCows = 65

#Calculate 30% of each farmer's cows
BasiruPerc = 30/100 * BasiruCows
SanuPerc = 30/100 * BasiruCows

#Add the result of 30% of each's coows
InheritCows = BasiruPerc + SanuPerc

#The cows the children will inherit is now “InheritCows”. Let's print that.
print (InheritCows)