import styles from '../../styles/Home.module.css';
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

 const Posts = () => {
  return (
    <div style={{ marginTop: 30, }}>
      {/* Hello */}
      <Grid.Container gap={2} justify="center" >
        <Grid sm={12} md={4}>
          <Card style={{height: '300px'}}>
            <Card.Header>
              <Text b>Card Title</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Cancel
                </Button>
                <Button size="sm">Agree</Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid sm={12} md={4}>
          <Card >
            <Card.Header>
              <Text b>Card Title</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Share
                </Button>
                <Button size="sm" color="secondary">
                  Learn more
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default Posts;

