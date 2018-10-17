import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )


export default store
