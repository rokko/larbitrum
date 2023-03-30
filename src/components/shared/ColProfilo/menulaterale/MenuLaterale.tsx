import React from 'react'
import { DivMenu, GroupMenu, TestoMenu } from './MenuLateraleStyled'

const MenuLaterale = () => {
  return (
    <DivMenu>
      <GroupMenu>
        <TestoMenu>Wallet</TestoMenu>
        <TestoMenu>Operations</TestoMenu>
        <TestoMenu>History</TestoMenu>
        <TestoMenu>Settings</TestoMenu>
      </GroupMenu>
    </DivMenu>
  )
}

export default MenuLaterale
