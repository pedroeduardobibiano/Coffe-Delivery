import { InitialContainer, InitialContent } from "./styles";

import  InitialImg  from '../../../../assets/Initial.svg'

export function Initial() {
    return (
        <InitialContainer>
            <InitialContent className="container">
                <div>
                    <section></section>
                </div>
                <img src={InitialImg} />
            </InitialContent>
        </InitialContainer>
    )
}