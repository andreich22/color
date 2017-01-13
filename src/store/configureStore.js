import { compose, createStore } from 'redux'
import persistState from 'redux-localstorage'
import rootReducer from '../reducers'


const enhancer = compose(
  
  persistState('task'/*paths, config*/),
)


export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}