import type { ColorToken, DefaultProps } from '@robin-ui/types'
import React, { Children, useRef } from 'react'
import { useUncontrolled } from '@robin-ui/hooks'
import { getFocusable } from '@robin-ui/utils'
import { sxc } from '@robin-ui/styles'

import type { Props as TabPanelProps } from '../TabPanel'
import { TransitionSwitch } from '../TransitionSwitch'
import { Button } from '../Button'

import { TabGroup, TabIndicator } from './Tabs.style'

export interface Props extends DefaultProps<HTMLDivElement, 'onChange'> {
  color?: ColorToken
  activeTab?: string | number
  defaultTab?: string | number
  onChange?: (tab?: string | number) => void
  children?: React.ReactElement | React.ReactElement[]
}

export const Tabs = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { color = 'primary', activeTab, defaultTab = 0, onChange, children, ...otherProps } = props
  const tabGroupRef = useRef<HTMLDivElement>(null)

  const [_activeTab, setUncontrolled] = useUncontrolled(defaultTab, activeTab)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const handleArrow = (direction: 'right' | 'left') => {
      const focusable = getFocusable(tabGroupRef.current, true)
      const itemIndex = focusable.findIndex(element => element === document.activeElement)
      const nextIndex = itemIndex + (direction === 'left' ? -1 : 1)
      const nextTarget = focusable[nextIndex]

      nextTarget?.focus()
      nextTarget?.click()
    }

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault()
        handleArrow('right')
        break
      case 'ArrowLeft':
        event.preventDefault()
        handleArrow('left')
        break
    }
  }

  const tabs = Children.toArray(children) as React.ReactElement<TabPanelProps | undefined>[]
  const activePanel = tabs.find((tab, i) =>
    typeof _activeTab === 'number' ? _activeTab === i : _activeTab === tab.props?.tabKey
  )

  return (
    <sxc.div ref={ref} {...otherProps}>
      <TabGroup
        ref={tabGroupRef}
        role="tablist"
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}>
        {tabs.map((tab, i) => {
          const key = tab.props?.tabKey ?? i
          const active = _activeTab === key
          return (
            <div key={key}>
              <Button
                role="tab"
                variant="text"
                radius="xs"
                color={active ? color : 'surface.onVariant'}
                onClick={() => {
                  onChange?.(key)
                  setUncontrolled(key)
                }}
                tabIndex={active ? 0 : -1}
                aria-selected={active}>
                {tab.props?.label}
              </Button>
              {active && <TabIndicator key={key} layoutId="underline" />}
            </div>
          )
        })}
      </TabGroup>
      <TransitionSwitch currentKey={_activeTab}>{activePanel}</TransitionSwitch>
    </sxc.div>
  )
})

Tabs.displayName = 'Tabs'
