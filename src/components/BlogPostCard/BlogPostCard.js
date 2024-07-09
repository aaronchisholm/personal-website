import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
//import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BlogPostCard = (post) => {

    return (
        <Card sx={{display: 'flex'}}>
            <CardActionArea href={post.Url}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {post.description}
                    </Typography>
                </CardContent>
            </Box>
            <Box sc={{display: 'flex', flexDirection: 'column'}}>
                <img src={post.imgSource} alt='img not available'></img>
            </Box>
            </CardActionArea>   
        </Card>
    );
};

export default BlogPostCard;