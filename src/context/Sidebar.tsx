import React, { useState, createContext } from 'react'

const SidebarContext = createContext(null)

export function SidebarProvider(props) {
  const [openLayer, _setOpenLayer] = useState([-1, -1, -1])
  const [collapsed, setCollapsed] = useState(false)

  const setOpenLayer = (layer, index) => {
    let next: number[] = openLayer.slice(0)
    if (next[layer] === index) {
      next[layer] = -1
    } else {
      next[layer] = index
    }
    next = next.map((opt, i) => (opt = i > layer ? -1 : opt))
    _setOpenLayer(next)
  }

  return (
    <SidebarContext.Provider
      value={{
        openLayer,
        setOpenLayer,
        collapsed,
        setCollapsed
      }}
      {...props}
    />
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (context === undefined) {
    throw new Error(`useSidebar must be used within a SidebarProvider`)
  }
  return context
}
