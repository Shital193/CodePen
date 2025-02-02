import { AppBar , Toolbar , styled } from '@mui/material';

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
    margin 5;
`


const Header =()=>{
    const logo ="data:image/png;base64,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";

    return (
        <div>
           <Container position='static'>
                <Toolbar>
                    <img src={logo} alt='logo' style={{ width:53 }}/>
                </Toolbar>
           </Container>
        </div>
    );
}

export default Header;