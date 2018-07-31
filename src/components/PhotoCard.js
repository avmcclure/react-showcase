import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        maxWidth: 300
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    }
};

class PhotoCard extends React.PureComponent {
    static propTypes = {
        albumId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        classes: PropTypes.object
    };

    render() {
        const { url, title, classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={url}
                    title={title}
                />
            </Card>
        );
    }
}

export default withStyles(styles)(PhotoCard);
