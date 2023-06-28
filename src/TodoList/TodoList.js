import { Component } from "react";

class TodoList extends Component {
    state = {
        list: [],
        input: "",
        checked: []
    }
    handlerInput = (e) => {
        this.setState({ input: e.target.value })
    }
    handlerButton = () => {
        this.setState({ list: [...this.state.list, this.state.input] })
    }
    handlerCheck = (e) => {
        if (e.target.checked) {
            this.setState({ checked: [...this.state.checked, e.target.value] })
        } else {
            this.setState({ checked: this.state.checked.filter((d) => d !== e.target.value) })
        }
    }
    handlerDelete = (e) => {
        const newList = this.state.list.filter(data => data !== e.target.value);
        this.setState({ list: newList });

    }

    render() {
        return (
            <>
                <div>TodoList</div>
                <input type="text" value={this.state.input} onChange={this.handlerInput} />
                <button onClick={this.handlerButton}>+</button>
                {
                    this.state.list.map((data, idx) => {
                        return (
                            <div key={idx}>
                                <input type="checkbox" value={idx} onChange={this.handlerCheck} />
                                {
                                    this.state.checked.includes(idx.toString()) ? <span style={{ textDecoration: "line-through" }}>{data}</span> : <span>{data}</span>
                                }

                                <button value={data} onClick={this.handlerDelete}>삭제하기</button>
                            </div>
                        )

                    })
                }
            </>
        )
    }
}
export default TodoList;