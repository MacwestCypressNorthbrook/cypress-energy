import React from "react";
import TransitionLink from "@/components/TransitionLink";

const ContactSidebar = () => {
  return (
    <aside className="bg-[#F8F9FA] rounded-[2.5rem] p-10 space-y-8">
      <div className="space-y-4">
        <div className="w-10 h-1 bg-[#DC5817]" />
        <h3 className="text-xl font-black uppercase tracking-tight leading-tight">
          If you're looking for practical solutions that yield lasting results, we are here to
          help.
        </h3>
      </div>

      <TransitionLink
        href="/contact"
        className="inline-flex items-center gap-3 bg-[#DC5817] text-white font-bold px-8 py-4 rounded-full hover:bg-[#C44D14] transition-all hover:scale-105 shadow-lg shadow-[#DC5817]/20 text-sm"
      >
        Contact Us
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </TransitionLink>

      <div className="space-y-6 pt-2">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#71717a]">Address</p>
          <p className="text-sm font-medium leading-relaxed">
            12 Joseph Richard Asiedu St., Accra-Ghana
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#71717a]">Phone</p>
          <a href="tel:+233302904525" className="block text-sm font-medium hover:text-[#DC5817] transition-colors">
            +233 (0) 302 904525
          </a>
          <a href="tel:+233244270797" className="block text-sm font-medium hover:text-[#DC5817] transition-colors">
            +233 (0) 244 270797
          </a>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#71717a]">Email</p>
          <a href="mailto:crewing@cypressenergyghana.com" className="block text-sm font-medium hover:text-[#DC5817] transition-colors break-all">
            crewing@cypressenergyghana.com
          </a>
          <a href="mailto:shipping@cypressenergyghana.com" className="block text-sm font-medium hover:text-[#DC5817] transition-colors break-all">
            shipping@cypressenergyghana.com
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ContactSidebar;
