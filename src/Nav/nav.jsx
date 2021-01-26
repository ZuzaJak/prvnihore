import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';
import logo from '../img/logo.png';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {' '}
      <div className="nav">
        <div className="nav__links">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="nav-items-flex">
            <NavLink
              activeClassName="is-active"
              className="nav-item"
              to="/gigs"
              onClick={() => {
                scrollTo({
                  top: 1000,
                  behavior: 'smooth',
                });
              }}
            >
              koncerty
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="is-active"
              to="/bio"
              onClick={() => {
                scrollTo({
                  top: 1000,
                  behavior: 'smooth',
                });
              }}
            >
              bio
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-item"
              to="/disco"
              onClick={() => {
                scrollTo({
                  top: 1000,
                  behavior: 'smooth',
                });
              }}
            >
              disco
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="is-active"
              to="/photo"
              onClick={() => {
                scrollTo({
                  top: 1000,
                  behavior: 'smooth',
                });
              }}
            >
              photo
            </NavLink>
          </div>
        </div>
        <div className="mobile-menu">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <i class="fas fa-bars"></i>
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              {' '}
              <NavLink
                activeClassName="is-active"
                className="nav-item-mobile"
                to="/gigs"
                onClick={() => {
                  scrollTo({
                    top: 100,
                    behavior: 'smooth',
                  });
                }}
              >
                koncerty
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink
                className="nav-item-mobile"
                activeClassName="is-active"
                to="/bio"
                onClick={() => {
                  scrollTo({
                    top: 100,
                    behavior: 'smooth',
                  });
                }}
              >
                bio
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink
                activeClassName="is-active"
                className="nav-item-mobile"
                to="/disco"
                onClick={() => {
                  scrollTo({
                    top: 100,
                    behavior: 'smooth',
                  });
                }}
              >
                disco
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink
                className="nav-item-mobile"
                activeClassName="is-active"
                to="/photo"
                onClick={() => {
                  scrollTo({
                    top: 100,
                    behavior: 'smooth',
                  });
                }}
              >
                photo
              </NavLink>
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
      <div className="nav__advert">
        <h3>
          Poslechněte si naši libou hudbu na{' '}
          <a
            className="nav__advert-a"
            href="https://prvnihore1.bandcamp.com/"
            target="_blank"
          >
            Bandcampu
          </a>{' '}
          nebo{' '}
          <a
            className="nav__advert-a"
            href="https://www.youtube.com/playlist?list=PLoN-PgWxxPFGK7jMv9zhAmdM7JeWG9Iu1"
            target="_blank"
          >
            Youtube
          </a>
          !
        </h3>
      </div>
    </>
  );
};

export default Nav;
