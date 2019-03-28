import React from "react";
import PropTypes from "prop-types";
import { MenuTemplate } from "../../templates/menu";

const MenuPreview = ({ entry, widgetFor }) => (
  <MenuTemplate
    title={entry.getIn(["data", "title"])}
    items={entry.getIn(["data", "items"])}
    slug={entry.getIn(["data", "slug"])}
  />
);

MenuPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default MenuPreview;
