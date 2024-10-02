import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Result from "./Result";
const Container1 = styled(Box)`
    display: flex;
    flex-direction: column;
`
const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    background-color: #060606;
    height: 30%;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    width: 100vw;
`
const Code = () => {
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Container1>
            <Container>
            <Editor
                    heading="HTML"
                    icon="/"
                    color="#FF3C41"
                    value={html}
                    onChange={setHtml}
                />
                <Editor
                    heading="CSS"
                    icon="*"
                    color="#0EBEFF"
                    value={css}
                    onChange={setCss}
                />
                <Editor
                    heading="JavaScript"
                    icon="()"
                    color="#FCD000"
                    value={js}
                    onChange={setJs}
                />
            </Container>
            <Container>
                <Result />
            </Container>
            
        </Container1>
    );
}

export default Code;