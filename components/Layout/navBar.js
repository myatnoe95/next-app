import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { useRouter } from 'next/router';


const NavbarComponent = () => {
  const router = useRouter();
  console.log('Route::', router);

    return(
        <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            My App
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link 
            href="/posts" 
            isActive={router.pathname === '/posts' ? true: false}  
            onclick={(e) => {
              e.preventDefault()
              // history.push('/') 
            }}
          >Posts</Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/customers' ? true: false} href="/customers">Customers</Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/pricing' ? true: false} href="/pricing">Pricing</Navbar.Link>
          <Navbar.Link isActive={router.pathname === '/company' ? true: false} href="/company">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
    </Navbar>
    )
}

export default NavbarComponent;