import React, { useState } from 'react'
import { PageLayout } from './PageLayout'
import { TopNavMyself } from './TopNav'
import { MyselfQuestion1 } from './myselfQuestions/MyselfQuestion1'
import { MyselfQuestion2 } from './myselfQuestions/MyselfQuestion2'
import { MyselfFinal } from './myselfQuestions/MyselfFinal'

export const Myself = () => {
  const [steps, setSteps] = useState([{ name: 'Step 1', status: 'current' },
    { name: 'Step 2', status: 'upcoming' }])
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState([null, null])

  const setCurrentStepHandler = (indexToChange) => {
    setSteps(prevState => {
      // eslint-disable-next-line array-callback-return
      return prevState.map((item, index) => {
        if (index < indexToChange) {
          return { ...item, status: 'complete' }
        } else if (index === indexToChange) {
          setCurrentStep(indexToChange)
          return { ...item, status: 'current' }
        } else if (index > indexToChange) {
          return { ...item, status: 'upcoming' }
        }
      })
    })
    if (steps.length === indexToChange) {
      setCurrentStep(indexToChange)
    }
  }

  const setAnswerHandler = (index, answer) => {
    setAnswers(prevState => {
      const newState = [...prevState]
      newState[index] = answer
      return newState
    })
    setCurrentStepHandler(index + 1)
  }

  return (
    <>
      <TopNavMyself />
      <PageLayout>
        <nav className='flex items-center justify-center my-7' aria-label='Progress'>
          <ol role='list' className='flex items-center space-x-5'>
            {steps.map((step, index) => (
              <li key={step.name}>
                {step.status === 'complete'
                  ? (
                    <a onClick={() => setCurrentStepHandler(index)} className='block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900'>
                      <span className='sr-only'>{step.name}</span>
                    </a>
                    )
                  : step.status === 'current'
                    ? (
                      <a onClick={() => setCurrentStepHandler(index)} className='relative flex items-center justify-center' aria-current='step'>
                        <span className='absolute w-5 h-5 p-px flex' aria-hidden='true'>
                          <span className='w-full h-full rounded-full bg-indigo-200' />
                        </span>
                        <span className='relative block w-2.5 h-2.5 bg-indigo-600 rounded-full' aria-hidden='true' />
                        <span className='sr-only'>{step.name}</span>
                      </a>
                      )
                    : (
                      <a onClick={() => setCurrentStepHandler(index)} className='block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400'>
                        <span className='sr-only'>{step.name}</span>
                      </a>
                      )}
              </li>
            ))}
          </ol>
        </nav>
        {currentStep === 0 ? <MyselfQuestion1 setAnswerHandler={setAnswerHandler} /> : null}
        {currentStep === 1 ? <MyselfQuestion2 setAnswerHandler={setAnswerHandler} /> : null}
        {currentStep === 2
          ? <MyselfFinal />
          : (
            <div className='flex flex-row justify-between w-full mt-8'>
              {currentStep !== 0
                ? (
                  <button
                    type='button'
                    className='inline-flex justify-between items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    onClick={() => setCurrentStepHandler(currentStep - 1)}
                  >
                    Previous
                  </button>)
                : <></>}
              <button
                type='button'
                className='inline-flex justify-between items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={() => setCurrentStepHandler(currentStep + 1)}
              >
                Next question
              </button>
            </div>)}
      </PageLayout>
    </>
  )
}
