import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const tabs = [
    {
      id: 1,
      label: 'All',
      value: 'all',
    },
    {
      id: 2,
      label: 'Pending',
      value: 'pending',
    },
    {
      id: 3,
      label: 'Completed',
      value: 'completed',
    },
  ]

  const [selectedTab, setSelectedTab] = useState('all')

  const getTriggerClass = (triggerValue: string): string =>
    triggerValue === selectedTab
      ? 'bg-gray-700 text-white'
      : 'text-gray-700 bg-white'

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <div className="pt-10">
          <Tabs.Root defaultValue="all" onValueChange={setSelectedTab}>
            <Tabs.List className="mb-10 flex gap-2">
              {tabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.id}
                  value={tab.value}
                  className={`
                  rounded-full border border-gray-200 px-6 py-3 text-sm font-bold transition-all hover:bg-gray-700 hover:text-white ${getTriggerClass(
                    tab.value
                  )}
                  `}
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <Tabs.Content value="all">
              <TodoList statuses={['pending', 'completed']} />
            </Tabs.Content>

            <Tabs.Content value="pending">
              <TodoList statuses={['pending']} />
            </Tabs.Content>

            <Tabs.Content value="completed">
              <TodoList statuses={['completed']} />
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
