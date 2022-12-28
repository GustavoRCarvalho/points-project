import './Button.css'

export function Button(props) {

    function popCirclesList({listToPop, setListToPop, setListToAdd}) {
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
        <button onClick={() => popCirclesList({listToPop: props.listToPop, setListToPop: props.setListToPop, setListToAdd: props.setListToAdd})}>
            {props.title}
        </button>
    )
}