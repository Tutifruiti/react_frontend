import React from 'react'

const List = [
    {
        id: 0,
        ticker: 'SPY'
    },
    {
        id:1,
        ticker: 'GLD'
    }
]

var PortfolioStateContext = React.createContext()
var PortfolioDispatchContext = React.createContext()

// Contain all possible actions
function portfolioReducer(state, action) {
    switch (action.type) {
      case 'ADD': {
          console.log(action.ticker)
        return [...state, {id: state.length, ticker: action.ticker}]
      }
      case 'DELETE': {
        return state.filter(list => list.id !== action.id)
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

  export {PortfolioProvider, usePortfolioState, usePortfolioDispatch, addItem}

 // #########################################################

 function addItem(dispatch, ticker) {
    dispatch({
      type: "ADD", ticker: ticker
    });
  }