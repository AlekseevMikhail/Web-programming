import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <div id={"header"}>
                <div id={"names-sign"}>
                    <div>
                        Алексеев&nbsp;Михаил & Гумеров Алан, P3214</div>
                    </div>
                <div id={"lab-sign"}>
                    <div>
                        Лабораторная №4
                    </div>
                </div>
                <div id={"var-sign"}>
                    <div>
                        Вариант: 13875
                    </div>
                </div>
            </div>
        )
    }
}