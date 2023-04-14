import React from 'react'

export default function Search() {
  return (
    <div class="shop__sidebar">
        <div class="shop__sidebar__search">
            <form action="#">
                <input type="text" placeholder="Search..."/>
                <button type="submit"><span class="icon_search"></span></button>
            </form>
        </div>
    </div>
  )
}
