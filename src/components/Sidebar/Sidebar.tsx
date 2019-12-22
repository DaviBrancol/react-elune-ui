import React, { useState, useEffect } from 'react'

export default function Sidebar(props) {
  return (
    <div className="eln-sidebar">
      <div className="eln-sidebar-header">
        <img
          src="https://app.teza.com.br/img/teza_logo_white.png"
          alt="Logo-Icon"
        />
      </div>
      <div className="eln-sidebar-container">
        <ul className="eln-sidebar-list">{props.children}</ul>
      </div>
    </div>
  )
}
