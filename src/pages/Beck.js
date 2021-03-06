import React, { useState } from 'react'

const beckQuestions = [{
  question: 'Sadness',
  list: [{
    text: 'I do not feel sad.', value: '0'
  },
  {
    text: 'I feel sad.', value: '1'
  },
  {
    text: 'I am sad all the time and I can\'t snap out of it.', value: '2'
  },
  {
    text: 'I am so sad and unhappy that I can\'t stand it.', value: '3'
  }]
},
{
  question: 'Pessimism',
  list: [{
    text: 'I am not particularly discouraged about the future.', value: '0'
  },
  {
    text: 'I feel discouraged about the future.', value: '1'
  },
  {
    text: 'I feel I have nothing to look forward to.', value: '2'
  },
  {
    text: 'I feel the future is hopeless and that things cannot improve.', value: '3'
  }]
},
{
  question: 'Sense of failure',
  list: [{
    text: 'I do not feel like a failure.', value: '0'
  },
  {
    text: 'I feel I have failed more than the average person.', value: '1'
  },
  {
    text: 'As I look back on my life, all I can see is a lot of failures.', value: '2'
  },
  {
    text: 'I feel I am a complete failure as a person.', value: '3'
  }]
},
{
  question: 'Loss of pleasure',
  list: [{
    text: 'I get as much satisfaction out of things as I used to.', value: '0'
  },
  {
    text: 'I don\'t enjoy things the way I used to.', value: '1'
  },
  {
    text: 'I don\'t get real satisfaction out of anything anymore.', value: '2'
  },
  {
    text: 'I am dissatisfied or bored with everything.', value: '3'
  }]
},
{
  question: 'Guilt',
  list: [{
    text: 'I don\'t feel particularly guilty.', value: '0'
  },
  {
    text: 'I feel guilty a good part of the time.', value: '1'
  },
  {
    text: 'I feel quite guilty most of the time.', value: '2'
  },
  {
    text: 'I feel guilty all of the time.', value: '3'
  }]
},
{
  question: 'Sense of punishment',
  list: [{
    text: 'I don\'t feel I am being punished.', value: '0'
  },
  {
    text: 'I feel I may be punished.', value: '1'
  },
  {
    text: 'I expect to be punished.', value: '2'
  },
  {
    text: 'I feel I am being punished.', value: '3'
  }]
},
{
  question: 'Loathing',
  list: [{
    text: 'I don\'t feel disappointed in myself.', value: '0'
  },
  {
    text: 'I am disappointed in myself.', value: '1'
  },
  {
    text: 'I am disgusted with myself.', value: '2'
  },
  {
    text: 'I hate myself.', value: '3'
  }]
},
{
  question: 'Self-incrimination',
  list: [{
    text: 'I don\'t feel I am any worse than anybody else.', value: '0'
  },
  {
    text: 'I am critical of myself for my weaknesses or mistakes.', value: '1'
  },
  {
    text: 'I blame myself all the time for my faults.', value: '2'
  },
  {
    text: 'I blame myself for everything bad that happens.', value: '3'
  }]
},
{
  question: 'Suicidal ideas',
  list: [{
    text: 'I don\'t have any thoughts of killing myself.', value: '0'
  },
  {
    text: 'I have thoughts of killing myself, but I would not carry them out.', value: '1'
  },
  {
    text: 'I would like to kill myself.', value: '2'
  },
  {
    text: 'I would kill myself if I had the chance.', value: '3'
  }]
},
{
  question: 'Crying',
  list: [{
    text: 'I don\'t cry any more than usual.', value: '0'
  },
  {
    text: 'I cry more now than I used to.', value: '1'
  },
  {
    text: 'I cry all the time now.', value: '2'
  },
  {
    text: 'I used to be able to cry, but now I can\'t cry even though I want to.', value: '3'
  }]
},
{
  question: 'Irritability',
  list: [{
    text: 'I am no more irritated by things than I ever was.', value: '0'
  },
  {
    text: 'I am slightly more irritated now than usual.', value: '1'
  },
  {
    text: 'I am quite annoyed or irritated a good deal of the time.', value: '2'
  },
  {
    text: 'I feel irritated all the time.', value: '3'
  }]
},
{
  question: 'Social withdrawal',
  list: [{
    text: 'I have not lost interest in other people.', value: '0'
  },
  {
    text: 'I am less interested in other people than I used to be.', value: '1'
  },
  {
    text: 'I have lost most of my interest in other people.', value: '2'
  },
  {
    text: 'I have lost all of my interest in other people.', value: '3'
  }]
},
{
  question: 'Indecision',
  list: [{
    text: 'I make decisions about as well as I ever could.', value: '0'
  },
  {
    text: 'I put off making decisions more than I used to.', value: '1'
  },
  {
    text: 'I have greater difficulty in making decisions more than I used to.', value: '2'
  },
  {
    text: 'I can\'t make decisions at all anymore.', value: '3'
  }]
},
{
  question: 'Feelings of wothlessness',
  list: [{
    text: 'I don\'t feel that I look any worse than I used to.', value: '0'
  },
  {
    text: 'I am worried that I am looking old or unattractive.', value: '1'
  },
  {
    text: 'I feel there are permanent changes in my appearance that make me look unattractive.', value: '2'
  },
  {
    text: 'I believe that I look ugly.', value: '3'
  }]
},
{
  question: 'Difficulty of concentration',
  list: [{
    text: 'I can work about as well as before.', value: '0'
  },
  {
    text: 'It takes an extra effort to get started at doing something.', value: '1'
  },
  {
    text: 'I have to push myself very hard to do anything.', value: '2'
  },
  {
    text: 'I can\'t do any work at all.', value: '3'
  }]
},
{
  question: 'Change of sleep',
  list: [{
    text: 'I can sleep as well as usual.', value: '0'
  },
  {
    text: 'I don\'t sleep as well as I used to.', value: '1'
  },
  {
    text: 'I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.', value: '2'
  },
  {
    text: 'I wake up several hours earlier than I used to and cannot get back to sleep.', value: '3'
  }]
},
{
  question: 'Fatigue',
  list: [{
    text: 'I don\'t get more tired than usual.', value: '0'
  },
  {
    text: 'I get tired more easily than I used to.', value: '1'
  },
  {
    text: 'I get tired from doing almost anything.', value: '2'
  },
  {
    text: 'I am too tired to do anything.', value: '3'
  }]
},
{
  question: 'Changes in appetite',
  list: [{
    text: 'My appetite is no worse than usual.', value: '0'
  },
  {
    text: 'My appetite is not as good as it used to be.', value: '1'
  },
  {
    text: 'My appetite is much worse now.', value: '2'
  },
  {
    text: 'I have no appetite at all anymore.', value: '3'
  }]
},
{
  question: 'Weight changes',
  list: [{
    text: 'I haven\'t lost much weight, if any, lately.', value: '0'
  },
  {
    text: 'I have lost more than five pounds.', value: '1'
  },
  {
    text: 'I have lost more than ten pounds.', value: '2'
  },
  {
    text: 'I have lost more than fifteen pounds.', value: '3'
  }]
},
{
  question: 'Health',
  list: [{
    text: 'I am no more worried about my health than usual.', value: '0'
  },
  {
    text: 'I am worried about physical problems like aches, pains, upset stomach, or constipation.', value: '1'
  },
  {
    text: 'I am very worried about physical problems and it\'s hard to think of much else.', value: '2'
  },
  {
    text: 'I am so worried about my physical problems that I cannot think of anything else.', value: '3'
  }]
},
{
  question: 'Loss of interest in sex',
  list: [{
    text: 'I have not noticed any recent change in my interest in sex.', value: '0'
  },
  {
    text: 'I am less interested in sex than I used to be.', value: '1'
  },
  {
    text: 'I have almost no interest in sex.', value: '2'
  },
  {
    text: 'I have lost interest in sex completely.', value: '3'
  }]
}]

export const Beck = ({ backToQuestions, goToFinish }) => {
  const [currentStep, setCurrentStep] = useState(0)
  return beckQuestions.map((item, index) => {
    if (index === currentStep) {
      return (
        <>
          <div className='flex items-center flex-col' key={`beckQuestion-${index}`}>
            <span
              className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-300 text-gray-800 my-3'
            >
              Beck's Question {index + 1}
            </span>
            <p className='font-bold mt-4 mb-7'>
              {item.question}
            </p>

            <div className='flex flex-col w-full'>
              {item.list.map((question, index) => (
                <button
                  key={`question-${index}`}
                  type='button'
                  className='inline-flex justify-between items-center px-6 py-3 mb-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={() => {
                    beckQuestions.length === currentStep + 1 ? goToFinish() : setCurrentStep(currentStep + 1)
                  }}
                >
                  {question.text}
                </button>
              ))}
            </div>
          </div>

          <div className='flex flex-row justify-between w-full mt-8'>
            {currentStep !== 0
              ? (
                <button
                  type='button'
                  className='inline-flex justify-between items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Previous
                </button>)
              : (
                <button
                  type='button'
                  className='inline-flex justify-between items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={() => backToQuestions()}
                >
                  Previous
                </button>)}
            <button
              type='button'
              className='inline-flex justify-between items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => {
                beckQuestions.length === currentStep + 1 ? goToFinish() : setCurrentStep(currentStep + 1)
              }}
            >
              Next question
            </button>
          </div>
        </>
      )
    }
    return null
  })
}
