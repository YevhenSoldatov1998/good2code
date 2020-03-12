import React from "react";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ArticleItem = ({article: {author, publishedAt, urlToImage, title, source: {name, id}}}) => {
    const useStyles = makeStyles(theme => ({
        root: {
            width: `calc(33% - ${theme.spacing(4)}px)`,
            margin: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                width: `calc(50% - ${theme.spacing(4)}px)`,
                margin: theme.spacing(2),
            },
            [theme.breakpoints.down('xs')]: {
                width: `calc(100% - ${theme.spacing(2)}px)`,
                margin: theme.spacing(1),
            }

        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
    }));
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar title={author} aria-label="recipe" className={classes.avatar}>
                        {author ?  author.substr(0, 1): 'N'}
                    </Avatar>
                }
                title={author ? author : 'no name'}
                subheader={publishedAt ? publishedAt.substr(0, publishedAt.indexOf('T')) : ''}
            />
            <CardMedia
                className={classes.media}
                image={urlToImage}
            />
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="h5">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
};
export default ArticleItem