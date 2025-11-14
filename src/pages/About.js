import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Grid } from '@mui/material'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    marginTop: '20px',
    maxWidth: 450
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

function SimpleCard(props) {
  const { classes } = props

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            About
          </Typography>
          <Typography component="p">
          

This Todo Application is a clean, modern, and fully responsive task-management tool built using the power of React.js. It leverages Redux Toolkit for efficient, predictable, and scalable state management, ensuring that every interaction—from adding a task to updating or deleting it—happens smoothly and without unnecessary re-renders. Navigation across different views is handled through React Router, delivering a seamless and intuitive multi-page experience within a single-page environment.

The UI is crafted with Material-UI (MUI), giving the app a polished, professional aesthetic with reusable components, consistent styling, and an adaptive layout suitable for all screen sizes. The design approach focuses on clarity and performance, making the interface easy to use while maintaining a modern tech feel.

This project follows a modular component structure, keeping the codebase clean, maintainable, and ready for future scaling. Whether it’s organizing tasks, tracking progress, or managing daily productivity goals, this Todo App provides a fast, reliable, and user-friendly experience. It serves as a solid example of how modern React tools work together—combining UI frameworks, routing systems, and advanced state management to build a complete, real-world application.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleCard)
