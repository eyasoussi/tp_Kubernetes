import React from 'react'

export default function State() {
  return (
    //size
    <div className="card">
      <div className="card-heading">
          <a data-toggle="collapse" data-target="#collapseFour">Size</a>
      </div>
      <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
          <div className="card-body">
              <div className="shop__sidebar__size">
                  <label for="xs">xs
                      <input type="radio" id="xs"/>
                  </label>
                  <label for="sm">s
                      <input type="radio" id="sm"/>
                  </label>
                  <label for="md">m
                      <input type="radio" id="md"/>
                  </label>
                  <label for="xl">xl
                      <input type="radio" id="xl"/>
                  </label>
                  <label for="2xl">2xl
                      <input type="radio" id="2xl"/>
                  </label>
                  <label for="xxl">xxl
                      <input type="radio" id="xxl"/>
                  </label>
                  <label for="3xl">3xl
                      <input type="radio" id="3xl"/>
                  </label>
                  <label for="4xl">4xl
                      <input type="radio" id="4xl"/>
                  </label>
              </div>
          </div>
      </div>
  </div>
  )
}
