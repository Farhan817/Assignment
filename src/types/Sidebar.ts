import { Component } from "react"

export interface menuList{
    title:string,
    path:string,
    icon:Component
}

export interface SidebarProps {
  open: boolean
  handelOpen: (val: boolean) => void | undefined
  menuList: menuList[]
}


