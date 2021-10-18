// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mXv5TZ5SUPGRneH9RoMn6q
// Component: tr5phcLQqCoEx
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_canvas_app_explorer.css"; // plasmic-import: mXv5TZ5SUPGRneH9RoMn6q/projectcss
import "./PlasmicLinkButton.css"; // plasmic-import: tr5phcLQqCoEx/css

export const PlasmicLinkButton__VariantProps = new Array("type", "size");

export const PlasmicLinkButton__ArgProps = new Array("href", "text");

function PlasmicLinkButton__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "plasmic_default__all",
        "plasmic_default__a",
        "root_reset_mXv5TZ5SUPGRneH9RoMn6q",
        "LinkButton__root__yNFi",
        {
          LinkButton__root__size_small__yNFiSQAk: hasVariant(
            variants,
            "size",
            "small"
          ),

          LinkButton__root__type_blankGray__yNFiff2A: hasVariant(
            variants,
            "type",
            "blankGray"
          ),

          LinkButton__root__type_blankOrange__yNFi2KHft: hasVariant(
            variants,
            "type",
            "blankOrange"
          ),

          LinkButton__root__type_outlineGray__yNFiVqldC: hasVariant(
            variants,
            "type",
            "outlineGray"
          ),

          LinkButton__root__type_solidGray__yNFiGiboD: hasVariant(
            variants,
            "type",
            "solidGray"
          ),

          LinkButton__root__type_solidOrange__yNFiI5Pxg: hasVariant(
            variants,
            "type",
            "solidOrange"
          )
        }
      )}
      href={args.href !== undefined ? args.href : "#"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Do the thing",
        value: args.text,
        className: classNames("LinkButton__slotTargetText__ewQcH", {
          LinkButton__slotTargetText__type_blankGray__ewQcHff2A: hasVariant(
            variants,
            "type",
            "blankGray"
          ),

          LinkButton__slotTargetText__type_blankOrange__ewQcH2KHft: hasVariant(
            variants,
            "type",
            "blankOrange"
          ),

          LinkButton__slotTargetText__type_outlineGray__ewQcHVqldC: hasVariant(
            variants,
            "type",
            "outlineGray"
          ),

          LinkButton__slotTargetText__type_solidGray__ewQcHGiboD: hasVariant(
            variants,
            "type",
            "solidGray"
          ),

          LinkButton__slotTargetText__type_solidOrange__ewQcHi5Pxg: hasVariant(
            variants,
            "type",
            "solidOrange"
          )
        })
      })}
    </a>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLinkButton__ArgProps,
      internalVariantPropNames: PlasmicLinkButton__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicLinkButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkButton";
  } else {
    func.displayName = `PlasmicLinkButton.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkButton = Object.assign(
  // Top-level PlasmicLinkButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLinkButton
    internalVariantProps: PlasmicLinkButton__VariantProps,
    internalArgProps: PlasmicLinkButton__ArgProps
  }
);

export default PlasmicLinkButton;
/* prettier-ignore-end */
