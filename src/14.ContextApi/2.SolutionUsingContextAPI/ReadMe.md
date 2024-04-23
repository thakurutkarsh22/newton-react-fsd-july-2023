Component structure will remain same as the image.

# Definatoin

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

# 3 steps for context setup

1. Create context -> [text](context/CartContext.js) -> React.createContext
2. Attach the COntext to MY COMPONENT ::: [text](components/ReactAppContextSolutionApi.js) -> CartContext.Provider
3. Consume the value inside context ::: [text](components/Cart.js) -> useContext

React context is Kinda Consumer and Provider Patter

CONSUMER: <Grocery />
<ProductDetailPage />
<ReusableComponent />

Provider: <CartContext.Provider />
