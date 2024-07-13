import React from "react";

import Link from "next/link";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="text-5xl font-bold pb-5 select-none">Settings</h2>
      <div>
        <div className="cards-payments-methods billing flex flex-col">
          <h3 className="text-xl text-[#000] font-bold">Billing</h3>
          <Link
            href="/setting/billing"
            className="py-2 pl-3 hover:text-[var(--ourorangeColor)]"
          >
            Billing & Payments
          </Link>
        </div>

        <div className="user-info-box-setting">
          <h3 className="text-xl text-[#000] font-bold">User Info</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="/setting/contactinfo"
              className="py-2 pl-3 hover:text-[var(--ourorangeColor)]"
            >
              Contact Info
            </Link>
            <Link
              href="/setting/verifyidentity"
              className="pb-2 pl-3 hover:text-[var(--ourorangeColor)]"
            >
              Verify Identity
            </Link>
          </div>
        </div>

        <div className="purchased-Services-setting">
          <h3 className="text-xl text-[#000] font-bold">Your Services</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="/setting/plans"
              className="py-2 pl-3 hover:text-[var(--ourorangeColor)]"
            >
              Your Plans
            </Link>
            <Link
              href="/setting/services"
              className="pb-2 pl-3 hover:text-[var(--ourorangeColor)]"
            >
              Your Service
            </Link>
            <Link
              href="/setting/workon"
              className="pb-2 pl-3 hover:text-[var(--ourorangeColor)]"
            >
              Work On Services
            </Link>
          </div>
        </div>

        <div className="contact-Services-setting">
          <h3 className="text-xl text-[#000] font-bold">Support</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="/contact"
              className="pb-2 pl-3 hover:text-[var(--ourorangeColor)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
