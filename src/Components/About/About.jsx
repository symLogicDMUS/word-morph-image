import React from "react";
import {useHistory} from "react-router-dom";
import {Box, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import HomeIconButtons from "../Home/HomeIconButtons";

function About() {
    const history = useHistory()
    return (
        <Box p={3}>
            <Typography paragraph style={{overflowY: 'scroll'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                posuere lectus at tristique tempus. Ut in turpis mollis, lobortis
                magna lobortis, condimentum lectus. In ipsum elit, malesuada ac
                porta quis, convallis a tellus. Suspendisse eget odio pellentesque,
                venenatis enim eu, hendrerit ipsum. Mauris suscipit venenatis odio,
                tincidunt vulputate erat semper vitae. Praesent a hendrerit sapien,
                non bibendum odio. Nulla ullamcorper at ipsum et fringilla. Morbi
                placerat sagittis convallis. Integer sodales risus ut ipsum
                condimentum, vel interdum risus mollis. Integer et nisi dignissim,
                sodales lorem at, vehicula sem. In at sodales justo. Donec lacinia
                quam at pretium vulputate. Pellentesque sollicitudin dapibus semper.
                Ut consequat sollicitudin auctor. Nunc neque elit, lobortis sed
                sapien vel, accumsan tincidunt mauris. Aliquam faucibus interdum
                turpis, sit amet imperdiet nulla vestibulum sit amet. Cras eu turpis
                blandit, tempor urna non, elementum nisi. Sed a porta quam, feugiat
                gravida mi. Ut at eros in quam facilisis aliquet id non elit. Mauris
                rutrum viverra orci vel dignissim. Proin blandit quam neque, vitae
                mattis purus sollicitudin ut. Sed consectetur neque sed libero
                sollicitudin, in mollis quam dapibus. In hac habitasse platea
                dictumst. In convallis lorem eu iaculis luctus. In eu dolor sit amet
                nibh lobortis sodales.
            </Typography>
            <Button
                color={"primary"}
                variant={"outlined"}
                onClick={() => history.push("/")}
                fullWidth
            >
                Back
            </Button>
            <HomeIconButtons />
        </Box>
    );
}

export default About;