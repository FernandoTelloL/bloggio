/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'

export const FilterAccordion = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='mb-4'>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemButton className='focus:outline-none'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={toggleAccordion}>
              Filtros
            </button>
          </AccordionItemButton>
          <AccordionItemPanel>
            {categories.map((category, index) => (
              <div key={index} className='flex items-center mt-2'>
                <input type='checkbox' id={category.id} className='form-checkbox h-5 w-5 text-blue-500' />
                <label htmlFor={category.id} className='ml-2'>{category.name}</label>
              </div>
            ))}
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
