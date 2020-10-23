import React from 'react'

const List = [
    {
        ticker: 'SPY'
    },
    {
        ticker: 'GLD'
    }
]

var PortfolioStateContext = React.createContext()
var PortfolioDispatchContext = React.createContext()

// Contain all possible actions
function portfolioReducer(state, action) {
    switch (action.type) {
      case 'ADD': {
        var newList = state.filter(list => list.ticker === action.ticker)
            if (newList.length === 0){
              console.log('add')
              return [...state, {ticker: action.ticker}]
            }
            return [...state]
        }
      case 'DELETE': {
        return state.filter(list => list.ticker !== action.ticker)
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }

function PortfolioProvider({children}) {
    var [state, dispatch] = React.useReducer(portfolioReducer, List)
    return (
      <PortfolioStateContext.Provider value={state}>
        <PortfolioDispatchContext.Provider value={dispatch}>
          {children}
        </PortfolioDispatchContext.Provider>
      </PortfolioStateContext.Provider>
    )
  }

  function usePortfolioState() {
    var context = React.useContext(PortfolioStateContext)
    if (context === undefined) {
      throw new Error('usePortfolioState must be used within a PortfolioProvider')
    }
    return context
  }

  function usePortfolioDispatch() {
    var context = React.useContext(PortfolioDispatchContext)
    if (context === undefined) {
      throw new Error('usePortfolioDispatch must be used within a PortfolioProvider')
    }
    return context
  }

  export {PortfolioProvider, usePortfolioState, usePortfolioDispatch, addItem, deleteItem}

 // #########################################################

 function addItem(dispatch, ticker) {
   dispatch({
      type: "ADD", ticker: ticker
    });
  }

  function deleteItem(dispatch, ticker) {
    dispatch({
      type: "DELETE", ticker: ticker
    });
  }