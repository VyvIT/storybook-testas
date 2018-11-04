const styles = theme => ({
      root: {
        display: 'grid',
        height: '100%',
      },
      layout_dashboard_2x2: {
        gridTemplateAreas: `'top-left top-right' 
                            'bottom-left bottom-right'`,
        [theme.breakpoints.down('sm')]: {
          gridTemplateAreas: `'top-left'
                              'top-right' 
                              'bottom-left'
                              'bottom-right'`,
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
      layout_dashboard_3x3: {
        gridTemplateAreas: `'top-left top-center top-right' 
                            'bottom-left bottom-center bottom-right'`,
      },
    }
  )
;

export default styles;
