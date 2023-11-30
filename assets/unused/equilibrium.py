import math
def evalEquil(reactants,products):
    oldR = reactants
    oldP = products
    products = (products + (reactants / 2))
    reactants = (reactants / 2)
    products = (products + (reactants / 4))
    reactants = reactants - (reactants/4)
    if oldR == reactants and oldP == products:
        print(reactants,products)
        return
    evalEquil(reactants,products)
evalEquil(30,0)
    
    
    