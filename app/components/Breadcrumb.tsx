"use client";

import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  to?: string; // optional: if not provided, it’s the current (active) page
}

interface BreadcrumbsNavProps {
  items: BreadcrumbItem[];
}

const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ items }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {items.map((item, index) =>
        item.to ? (
          <MuiLink
            key={index}
            component={Link}
            href={item.to}   // ✅ FIXED: use href, not to
            color="inherit"
            underline="hover"
            sx={{ cursor: "pointer" }}
          >
            {item.label}
          </MuiLink>
        ) : (
          <Typography key={index} sx={{ color: "text.primary" }}>
            {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
