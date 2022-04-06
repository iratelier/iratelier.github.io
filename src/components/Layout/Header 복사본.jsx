import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./header.css";

export default class Header extends Component {
    state = {};
    handleItemClick = (e, { name }) =>
        this.setState({
            activeItem: name,
        });

    render() {
        const { activeItem } = this.state;
        return (
            <header id="header" className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white/60 supports-backdrop-blur:bg-white/50 dark:bg-transparent">
                <Menu text fixed>
                    <Menu.Item className="logo text-slate-500 dark:text-slate-400" name="miracleStudio" as={Link} to="/" active={activeItem === "home"} onClick={this.handleItemClick} />
                    {/* <Menu.Menu position="right" className="nav">
            <Menu.Item
              name="about"
              as={Link}
              to="about"
              active={activeItem === "about"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="blog"
              as={Link}
              to="blog"
              active={activeItem === "blog"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="review"
              as={Link}
              to="review"
              active={activeItem === "review"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="contact"
              as={Link}
              to="contact"
              active={activeItem === "contact"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="experience"
              as={Link}
              to="experience"
              active={activeItem === "experience"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu> */}
                </Menu>
            </header>
        );
    }
}
