import './Button.css'

export function Button(props) {

    function handlePopCirclesList() {
        const {listToPop, setListToPop, setListToAdd} =  props

        if (listToPop.length) {
          const popItem = listToPop[listToPop.length - 1]
          setListToPop((list) => {
            list.pop()
            return list
          })
          setListToAdd((list) => [...list, popItem])
        }
      }
    return (
        <button onClick={handlePopCirclesList}>
            {props.title}
        </button>
    )
}