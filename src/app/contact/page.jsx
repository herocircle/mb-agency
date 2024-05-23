'use client'
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import ContactInfoWidget from "@/app/ui/Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";
import {useState} from "react";
import {useForm} from "react-hook-form";

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Message sent successfully');
      } else {
        alert('Failed to send message: ' + result.error);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
      <>
        <PageHeading
            title="Contact Us"
            bgSrc="/images/contact_hero_bg.jpeg"
            pageLinkText="Contact"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading
                  title="Do you have a project <br/>in your mind?"
                  subtitle="Getting Touch"
              />
              <Spacing lg="55" md="30" />
              <ContactInfoWidget withIcon />
              <Spacing lg="0" md="50" />
            </Div>
            <Div className="col-lg-6">
              <form onSubmit={handleSubmit(onSubmit)} className="row">
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Full Name*</label>
                  <input
                      type="text"
                      className="cs-form_field"
                      {...register('fullName', { required: 'Full Name is required' })}
                  />
                  {errors.fullName && <p>{errors.fullName.message}</p>}
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
                  <input
                      type="text"
                      className="cs-form_field"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          message: 'Invalid email address'
                        }
                      })}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Project Type*</label>
                  <input
                      type="text"
                      className="cs-form_field"
                      {...register('projectType', { required: 'Project Type is required' })}
                  />
                  {errors.projectType && <p>{errors.projectType.message}</p>}
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Mobile*</label>
                  <input
                      type="text"
                      className="cs-form_field"
                      {...register('mobile', { required: 'Mobile is required' })}
                  />
                  {errors.mobile && <p>{errors.mobile.message}</p>}
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-12">
                  <label className="cs-primary_color">Message*</label>
                  <textarea
                      cols="30"
                      rows="7"
                      className="cs-form_field"
                      {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && <p>{errors.message.message}</p>}
                  <Spacing lg="25" md="25" />
                </Div>
                <Div className="col-sm-12">
                  <button type="submit" className="cs-btn cs-style1" disabled={loading}>
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    {!loading && <Icon icon="bi:arrow-right" />}
                  </button>
                </Div>
              </form>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="cs-google_map">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
              allowFullScreen
              title="Google Map"
          />
        </Div>
        <Spacing lg="50" md="40" />
      </>
  );
}
