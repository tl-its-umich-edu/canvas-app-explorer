// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mXv5TZ5SUPGRneH9RoMn6q
// Component: 4XPgsAhljqdds
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: rgvwcoUrD14Pp/component
import ProductCard from "../../ProductCard"; // plasmic-import: zc_-JZqmkLhAk/component
import Ratings from "../../Ratings"; // plasmic-import: kZJnDl5cN7jJ7/component
import AddRemoveButton from "../../AddRemoveButton"; // plasmic-import: JyIyDBiGW-/component
import LearnMoreButton from "../../LearnMoreButton"; // plasmic-import: dm73fzeGC7/component
import Footer from "../../Footer"; // plasmic-import: SxuS7aSzfTV9l/component
import { useScreenVariants as useScreenVariantsthj0P9Nxeh81I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: thj0p9NXEH81i/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_canvas_app_explorer.css"; // plasmic-import: mXv5TZ5SUPGRneH9RoMn6q/projectcss
import "./PlasmicHome.css"; // plasmic-import: 4XPgsAhljqdds/css

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

function PlasmicHome__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsthj0P9Nxeh81I()
  });

  return (
    <React.Fragment>
      <div className={"plasmic_page_wrapper"}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "root_reset_mXv5TZ5SUPGRneH9RoMn6q",
            "Home__root__rfWi8"
          )}
        >
          {false ? (
            <input
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__input",
                "Home__textInput__kcHjj"
              )}
              placeholder={"Some placeholder"}
              size={1}
              type={"text"}
              value={"Some value"}
            />
          ) : null}

          <div
            data-plasmic-name={"appContainer"}
            data-plasmic-override={overrides.appContainer}
            className={classNames(
              "plasmic_default__all",
              "plasmic_default__div",
              "Home__appContainer___8LuQk"
            )}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", "Home__header__iXzGr")}
              noSearchBarOrSettings={true}
              withSearchBar={true}
            />

            {false ? (
              <input
                className={classNames(
                  "plasmic_default__all",
                  "plasmic_default__input",
                  "Home__textInput__y0QeV"
                )}
                placeholder={"Some placeholder"}
                size={1}
                type={"text"}
                value={"Some value"}
              />
            ) : null}

            <div
              data-plasmic-name={"caeDescriptionContainer"}
              data-plasmic-override={overrides.caeDescriptionContainer}
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__div",
                "Home__caeDescriptionContainer__d20ZQ"
              )}
            >
              <div
                className={classNames(
                  "plasmic_default__all",
                  "plasmic_default__div",
                  "__wab_text",
                  "Home__text__k3LxN"
                )}
              >
                {
                  "Canvas App Explorer is a collection of resources to assist the instructor in using the best tools available for you and your students. "
                }
              </div>
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"productCardContainer"}
              data-plasmic-override={overrides.productCardContainer}
              hasGap={true}
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__div",
                "Home__productCardContainer___92DMt"
              )}
            >
              <ProductCard
                data-plasmic-name={"zoomCard"}
                data-plasmic-override={overrides.zoomCard}
                addRemoveSlot={
                  <AddRemoveButton
                    className={classNames(
                      "__wab_instance",
                      "Home__addRemoveButton___3D93M"
                    )}
                  />
                }
                className={classNames(
                  "__wab_instance",
                  "Home__zoomCard__foQyr"
                )}
                description={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__c1Y5M"
                    )}
                  >
                    {"Provides access to the Zoom video conference platform."}
                  </div>
                }
                descriptionLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__byvgJ"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Description"}
                      </span>
                      <React.Fragment>
                        {
                          "\nProvides access to the Zoom video conference platform."
                        }
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                }
                image={
                  <img
                    alt={""}
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__img",
                      "Home__img__zw5Ho"
                    )}
                    src={
                      "/static/plasmic/canvas_app_explorer/images/zoomMeetingpng.png"
                    }
                  />
                }
                learnMoreSlot={
                  <LearnMoreButton
                    data-plasmic-name={"learnMoreButton"}
                    data-plasmic-override={overrides.learnMoreButton}
                    className={classNames(
                      "__wab_instance",
                      "Home__learnMoreButton__j6ASy"
                    )}
                  />
                }
                logo={
                  <img
                    alt={""}
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__img",
                      "Home__img__zZtPf"
                    )}
                    src={
                      "/static/plasmic/canvas_app_explorer/images/zoomLogo.png"
                    }
                  />
                }
                onlyLearnMore={true}
                placementsInCanvasLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text___2AlAo"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Placements in Canvas"}
                      </span>
                      <React.Fragment>{"\nCourse Navigation"}</React.Fragment>
                    </React.Fragment>
                  </div>
                }
                privacyAgreementLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__pkIjF"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Privacy Agreement"}
                      </span>
                      <React.Fragment>
                        {"\nData Protection Addendum\n"}
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                }
                ratings={
                  <Ratings
                    className={classNames(
                      "__wab_instance",
                      "Home__ratings__yXulX"
                    )}
                    numReviews={"(45 Review)"}
                    stars={"four"}
                  />
                }
                supportResourcesLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text___1JHrn"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Support Resources"}
                      </span>
                      <React.Fragment>
                        {"\nITS Teaching with Zoom Guide"}
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                }
                title={"Zoom"}
                toolLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__dHRrw"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Tool"}
                      </span>
                      <React.Fragment>{"\nZoom"}</React.Fragment>
                    </React.Fragment>
                  </div>
                }
              />

              <ProductCard
                data-plasmic-name={"myLaCard"}
                data-plasmic-override={overrides.myLaCard}
                addRemoveSlot={
                  <AddRemoveButton
                    className={classNames(
                      "__wab_instance",
                      "Home__addRemoveButton__bH9Sb"
                    )}
                  />
                }
                className={classNames(
                  "__wab_instance",
                  "Home__myLaCard__gpGZx"
                )}
                description={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__jl7El"
                    )}
                  >
                    {
                      "Dashboard that provides students with information about engagement with course."
                    }
                  </div>
                }
                descriptionLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__qtw8U"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Description"}
                      </span>
                      <React.Fragment>
                        {
                          "\nMy Learning Analytics (MyLA) is a dashboard that provides students with information about their engagement with course materials and resources, assignments, and grades in a Canvas course."
                        }
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                }
                image={
                  <img
                    alt={""}
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__img",
                      "Home__img__psMY"
                    )}
                    src={
                      "/static/plasmic/canvas_app_explorer/images/myLearningAnalytics.png"
                    }
                  />
                }
                logo={
                  <img
                    alt={""}
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__img",
                      "Home__img__u0Ib1"
                    )}
                    src={
                      "/static/plasmic/canvas_app_explorer/images/myLaLogo.png"
                    }
                  />
                }
                onlyLearnMore={true}
                photoLearnMore={
                  <img
                    alt={""}
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__img",
                      "Home__img__xvJc3"
                    )}
                    src={
                      "/static/plasmic/canvas_app_explorer/images/myLearningAnalytics.png"
                    }
                  />
                }
                placementsInCanvasLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__vTgLe"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Placements in Canvas"}
                      </span>
                      <React.Fragment>{"\nCourse Navigation"}</React.Fragment>
                    </React.Fragment>
                  </div>
                }
                privacyAgreementLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text___0K8U1"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Privacy Agreement"}
                      </span>
                      <React.Fragment>
                        {"\nNot required (U-M hosted)"}
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                }
                ratings={
                  true ? (
                    <Ratings
                      className={classNames(
                        "__wab_instance",
                        "Home__ratings__iUUiJ"
                      )}
                      numReviews={"(45 Review)"}
                      stars={"five"}
                    />
                  ) : null
                }
                supportResourcesLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text___6AcC7"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Support Resources"}
                      </span>
                      <React.Fragment>
                        {"\nITS My Learning Analytics Guide"}
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                }
                title={"My Learning Analytics"}
                toolLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text___4Gd6"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Tool"}
                      </span>
                      <React.Fragment>
                        {"\nMy Learning Analytics"}
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                }
              />

              <ProductCard
                data-plasmic-name={"productCard"}
                data-plasmic-override={overrides.productCard}
                className={classNames(
                  "__wab_instance",
                  "Home__productCard__wcXOk"
                )}
                description={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text___7Xnkd"
                    )}
                  >
                    {"Panopto is used to record, share and manage videos."}
                  </div>
                }
                image={
                  <img
                    alt={""}
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__img",
                      "Home__img__zTJvN"
                    )}
                    src={
                      "/static/plasmic/canvas_app_explorer/images/panopto.png"
                    }
                  />
                }
                onlyLearnMore={true}
              />

              <ProductCard
                data-plasmic-name={"piazzaCard"}
                data-plasmic-override={overrides.piazzaCard}
                addRemoveSlot={
                  <AddRemoveButton
                    className={classNames(
                      "__wab_instance",
                      "Home__addRemoveButton___6ByWv"
                    )}
                    removeToolFromSite={true}
                  />
                }
                className={classNames(
                  "__wab_instance",
                  "Home__piazzaCard___71L95"
                )}
                description={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__qBpZp"
                    )}
                  >
                    {
                      "Class discussion/Q&A site with link to course navigation for Piazza discussions."
                    }
                  </div>
                }
                descriptionLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__tNQf2"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Description"}
                      </span>
                      <React.Fragment>
                        {
                          "\nPiazza is a new style of discussion/Q&A site with a focus on educational institutions. This integration adds a link to the course navigation for Piazza discussions, and auto-logs the user into the course discussions area."
                        }
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                }
                image={
                  <img
                    alt={""}
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__img",
                      "Home__img__fApwR"
                    )}
                    src={
                      "/static/plasmic/canvas_app_explorer/images/piazzainstructorpostpng.png"
                    }
                  />
                }
                logo={
                  <img
                    alt={""}
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__img",
                      "Home__img__eqcPf"
                    )}
                    src={
                      "/static/plasmic/canvas_app_explorer/images/piazzaLogo.png"
                    }
                  />
                }
                onlyLearnMore={true}
                photoLearnMore={
                  <img
                    alt={""}
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__img",
                      "Home__img__oJq2O"
                    )}
                    src={
                      "/static/plasmic/canvas_app_explorer/images/piazzainstructorpostpng.png"
                    }
                  />
                }
                placementsInCanvasLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__zt4W4"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Placements in Canvas"}
                      </span>
                      <React.Fragment>{"\nCourse Navigation"}</React.Fragment>
                    </React.Fragment>
                  </div>
                }
                privacyAgreementLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__zQwT"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Privacy Agreement"}
                      </span>
                      <React.Fragment>
                        {"\nData Protection Addendum"}
                      </React.Fragment>
                    </React.Fragment>
                  </div>
                }
                ratings={
                  <Ratings
                    className={classNames(
                      "__wab_instance",
                      "Home__ratings___14DWe"
                    )}
                    numReviews={"(45 Review)"}
                    stars={"five"}
                  />
                }
                supportResourcesLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__t3KQg"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Support Resources"}
                      </span>
                      <React.Fragment>{"\nPiazza Support"}</React.Fragment>
                    </React.Fragment>
                  </div>
                }
                title={"Piazza"}
                toolLearnMore={
                  <div
                    className={classNames(
                      "plasmic_default__all",
                      "plasmic_default__div",
                      "__wab_text",
                      "Home__text__fkRVt"
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ fontWeight: 700 }}
                      >
                        {"Tool"}
                      </span>
                      <React.Fragment>{"\nPiazza"}</React.Fragment>
                    </React.Fragment>
                  </div>
                }
              />
            </p.Stack>

            {true ? (
              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", "Home__footer__sUgvZ")}
              />
            ) : null}
          </div>

          {false ? (
            <input
              className={classNames(
                "plasmic_default__all",
                "plasmic_default__input",
                "Home__textInput__triAl"
              )}
              placeholder={"Some placeholder"}
              size={1}
              type={"text"}
              value={"Some value"}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "appContainer",
    "header",
    "caeDescriptionContainer",
    "productCardContainer",
    "zoomCard",
    "learnMoreButton",
    "myLaCard",
    "productCard",
    "piazzaCard",
    "footer"
  ],

  appContainer: [
    "appContainer",
    "header",
    "caeDescriptionContainer",
    "productCardContainer",
    "zoomCard",
    "learnMoreButton",
    "myLaCard",
    "productCard",
    "piazzaCard",
    "footer"
  ],

  header: ["header"],
  caeDescriptionContainer: ["caeDescriptionContainer"],
  productCardContainer: [
    "productCardContainer",
    "zoomCard",
    "learnMoreButton",
    "myLaCard",
    "productCard",
    "piazzaCard"
  ],

  zoomCard: ["zoomCard", "learnMoreButton"],
  learnMoreButton: ["learnMoreButton"],
  myLaCard: ["myLaCard"],
  productCard: ["productCard"],
  piazzaCard: ["piazzaCard"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    appContainer: makeNodeComponent("appContainer"),
    header: makeNodeComponent("header"),
    caeDescriptionContainer: makeNodeComponent("caeDescriptionContainer"),
    productCardContainer: makeNodeComponent("productCardContainer"),
    zoomCard: makeNodeComponent("zoomCard"),
    learnMoreButton: makeNodeComponent("learnMoreButton"),
    myLaCard: makeNodeComponent("myLaCard"),
    productCard: makeNodeComponent("productCard"),
    piazzaCard: makeNodeComponent("piazzaCard"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
