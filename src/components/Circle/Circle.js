import './Circle.css'

export function Circle({circles}) {

    return circles.map((circle) => {
            return (
                <div
                    data-testid="circle"
                    className="Circle"
                    key={circle.key}
                    style={{
                        top: circle.Y+"px",
                        left: circle.X+"px"
                        }}>
                </div>
            )
        })
}