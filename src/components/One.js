import React from 'react'
import './One.scss'

const One = () => {
  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  const statement =
    'The human mind works best when allowed to focus. It provides an individual an   opportunity to get into the Zone.  Is this true for you?'
  const words = statement.split(/\s+/)
  shuffle(words)

  return (
    <div>
      <h3>{statement}</h3>
      <div className="wrapper">
        {words.map((word, index) => {
          return (
            <div key={index} className="peg">
              {word}
            </div>
          )
        })}
      </div>
      <div className="wrapper">
        {words.map((word, index) => {
          return <div key={index} className="hole"></div>
        })}
      </div>
    </div>
  )
}

export default One
