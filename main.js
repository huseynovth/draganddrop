const dragItems = document.querySelectorAll('.task')
const myContainer = document.querySelectorAll('.taskContainer')

function getDragBetweenElement(container, y){
    const draggableItems =  [...container.querySelectorAll('.draggable:not(.dragging )')]
    
    return draggableItems.reduce((closest, child) => {

        if(offset < 0 && offset > closest.offset)
        {
            return {offset:offset, element:child}
        }
        else
        {
            return closest
        }
    }, 
    
    {offset: Number.POSITIVE_INFINITY}).element
}
dragItems.forEach(dragitem =>{
    dragitem.addEventListener('dragstart', ()=>{
    dragitem.classList.add('dragging')
    })
    dragitem.addEventListener('dragend', ()=>{
        dragitem.classList.remove('dragging')
    })
})
myContainer.forEach(container =>{
    container.addEventListener('dragover', e =>{
        e.preventDefault()
        const dragitem = document.querySelector('.dragging')
        container.appendChild(dragitem)
    })
}) 