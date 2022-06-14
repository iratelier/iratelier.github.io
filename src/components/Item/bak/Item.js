"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ItemContent = _interopRequireDefault("../Item/ItemContent");

var _ItemGroup = _interopRequireDefault("../Item/ItemGroup");

var _ItemImage = _interopRequireDefault("../Item/ItemImage");

var _ItemHeader = _interopRequireDefault("../Item/ItemHeader");

var _ItemType = _interopRequireDefault("../Item/ItemType");

var _ItemRole = _interopRequireDefault("../Item/ItemRole");

var _ItemDate = _interopRequireDefault("../Item/ItemDate");

var _ItemContribution = _interopRequireDefault("../Item/ItemContribution");

var _ItemSkills = _interopRequireDefault("../Item/ItemSkills");

var _ItemLinks = _interopRequireDefault("../Item/ItemLinks");

var _ItemBehance = _interopRequireDefault("../Item/ItemBehance");

var _ItemAwards = _interopRequireDefault("../Item/ItemAwards");

// var _ItemDescription = _interopRequireDefault("../Item/ItemDescription");

// var _ItemExtra = _interopRequireDefault("../Item/ItemExtra");

// var _ItemMeta = _interopRequireDefault("../Item/ItemMeta");

/**
 * An item view presents large collections of site content for display.
 */
function Item(props) {
    var children = props.children,
        className = props.className,
        image = props.image,
        content = props.content,
        header = props.header,
        type = props.type,
        role = props.role,
        date = props.date,
        contribution = props.contribution,
        skills = props.skills,
        links = props.links,
        behance = props.behance,
        awards = props.awards;
    // description = props.description,
    // extra = props.extra,
    // meta = props.meta;
    var classes = (0, _clsx.default)("item", className);
    var rest = (0, _lib.getUnhandledProps)(Item, props);
    var ElementType = (0, _lib.getElementType)(Item, props);

    if (!_lib.childrenUtils.isNil(children)) {
        return /*#__PURE__*/ _react.default.createElement(
            ElementType,
            (0, _extends2.default)({}, rest, {
                className: classes,
            }),
            children
        );
    }

    return /*#__PURE__*/ _react.default.createElement(
        ElementType,
        (0, _extends2.default)({}, rest, {
            className: classes,
        }),
        _ItemImage.default.create(image, {
            autoGenerateKey: false,
        }),
        /*#__PURE__*/ _react.default.createElement(_ItemContent.default, {
            content: content,
            header: header,
            type: type,
            role: role,
            date: date,
            contribution: contribution,
            skills: skills,
            links: links,
            behance: behance,
            awards: awards,
            // description: description,
            // extra: extra,
            // meta: meta,
        })
    );
}

Item.handledProps = ["as", "children", "className", "image", "content", "header", "type", "role", "date", "contribution", "skills", "links", "behance", "awards"];
// Item.handledProps = ["as", "children", "className", "image", "content", "header", "description", "extra", "meta"];
Item.Group = _ItemGroup.default;
Item.Image = _ItemImage.default;
Item.Content = _ItemContent.default;
Item.Header = _ItemHeader.default;
Item.Type = _ItemType.default;
Item.Role = _ItemRole.default;
Item.Date = _ItemDate.default;
Item.Contribution = _ItemContribution.default;
Item.Skills = _ItemSkills.default;
Item.Links = _ItemLinks.default;
Item.Behance = _ItemBehance.default;
Item.Awards = _ItemAwards.default;

// Item.Description = _ItemDescription.default;
// Item.Extra = _ItemExtra.default;
// Item.Meta = _ItemMeta.default;

Item.propTypes =
    process.env.NODE_ENV !== "production"
        ? {
              /** An element type to render as (string or function). */
              as: _propTypes.default.elementType,

              /** Primary content. */
              children: _propTypes.default.node,

              /** Additional classes. */
              className: _propTypes.default.string,

              /** Shorthand for ItemImage component. */
              image: _lib.customPropTypes.itemShorthand,

              /** Shorthand for ItemContent component. */
              content: _lib.customPropTypes.contentShorthand,

              /** Shorthand for ItemHeader component. */
              header: _lib.customPropTypes.itemShorthand,

              /** Shorthand for ItemType component. */
              type: _lib.customPropTypes.itemShorthand,

              /** Shorthand for ItemRole component. */
              role: _lib.customPropTypes.itemShorthand,

              /** Shorthand for ItemDate component. */
              date: _lib.customPropTypes.itemShorthand,

              /** Shorthand for ItemContribution component. */
              contribution: _lib.customPropTypes.itemShorthand,

              /** Shorthand for ItemSkills component. */
              skills: _lib.customPropTypes.itemShorthand,

              /** Shorthand for ItemLinks component. */
              links: _lib.customPropTypes.itemShorthand,

              /** Shorthand for ItemBehance component. */
              behance: _lib.customPropTypes.itemShorthand,

              /** Shorthand for ItemAwards component. */
              awards: _lib.customPropTypes.itemShorthand,

              //   /** Shorthand for ItemDescription component. */
              //   description: _lib.customPropTypes.itemShorthand,

              //   /** Shorthand for ItemExtra component. */
              //   extra: _lib.customPropTypes.itemShorthand,

              //   /** Shorthand for ItemMeta component. */
              //   meta: _lib.customPropTypes.itemShorthand,
          }
        : {};
var _default = Item;
exports.default = _default;
