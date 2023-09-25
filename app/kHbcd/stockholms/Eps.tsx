import Link from "next/link";
import Image from "next/image";
// import { BsQuote } from "react-icons/bs";
import { QuoteIcon } from '@radix-ui/react-icons'
export default function Eps() {
  const baseURL = "/kHbcd/stockholms"

  return (
    <section>
      <div className="m-auto">
        <blockquote id="eps">
        <QuoteIcon className="text-slate-400 w-6 h-6 dark:text-blue-300/70 rotate-180" />
          <h1 className="text-3xl text-blue-600 font-semibold -mt-3 ml-6">
          โฟม EPS และ XPS เกรดไม่ลามไฟ 
          </h1>
        </blockquote>
      </div>
      <p>
      สาร HBCD ที่ถูกผลิตขึ้นในช่วงหลายสิบปีที่ผ่านมา ส่วนใหญ่ (&gt;95%) ถูกนำไปใช้เป็นสารหน่วงการติดไฟสำหรับโฟม EPS และ XPS สำหรับใช้เป็นฉนวนอาคาร ซึ่งโดยทั่วไปอาคารเหล่านี้ จะมีอายุการใช้งานมากกว่า 50 ปี ในขณะที่ตัวแผ่นโฟม EPS/XPS สามารถมีอายุการใช้งานได้กว่า 100 ปี โดยในอดีตเม็ดโฟม EPS เกรดไม่ลามไฟ จะมีสาร HBCD ผสมอยู่ประมาณ 0.7-1% โดยน้ำหนัก ส่วน XPS มาสเตอร์แบซ จะมี HBCD ผสมประมาณ 40-70% ของน้ำหนักเม็ด pellet และโฟม XPS เกรดไม่ลามไฟ จะมีสาร HBCD ผสมอยู่ประมาณ 0.5-3% โดยน้ำหนัก (<Link href={`${baseURL}#ref20`}>US EPA 2020</Link>) แต่ด้วยลักษณะเฉพาะตัวของสาร HBCD ที่ไม่ได้เป็นสารที่ระเหยง่าย (non-volatile solid) และแทบไม่ละลายน้ำ อีกทั้งลักษณะการใช้งานเป็นฉนวนอาคารที่มักไม่ถูกรบกวนจากแรงกระทำจากภายนอก โอกาสที่เกิดการรั่วไหลของสาร HBCD ออกจากแผ่นฉนวนอาคารในระหว่างการใช้งานจึงน้อย โดยผลการศึกษาของหลายประเทศ พบว่าความเสี่ยงจากการรั่วไหลและการได้รับสาร HBCD ที่ใช้ในงานฉนวนอาคารจะอยู่ในช่วง การผลิตเม็ดโฟม การผลิตแผ่นโฟม การติดตั้งโฟมในอาคาร การบำรุงรักษา/ซ่อมแซมอาคาร การรื้อถอนและการจัดการแผ่นโฟมหลังการใช้งาน (<Link href={`${baseURL}#ref05`}>European Commission 2008</Link>; <Link href={`${baseURL}#ref04`}>Environment Canada and Health Canada 2011</Link>; <Link href={`${baseURL}#ref09`}>NICNAS 2012</Link>; <Link href={`${baseURL}#ref20`}>US EPA 2020</Link>) ซึ่งมักมีกิจกรรมที่ก่อให้เกิดการฟุ้งกระจายของฝุ่น HBCD และฝุ่นโฟมที่ปนเปื้อน HBCD ออกสู่สิ่งแวดล้อม 
</p><p>
ในปีค.ศ. 2013 ที่ประชุม COP ของอนุสัญญาสตอกโฮล์มได้มีมติให้เพิ่มรายชื่อสาร HBCD ในบัญชีรายชื่อสาร POPs ในภาคผนวก เอ (บัญชีรายชื่อสารที่ต้องกำจัด) มีผลทำให้ภาคีสมาชิก ต้องห้ามหรือดำเนินมาตรการภายในประเทศ เพื่อกำจัดการผลิต การใช้ การนำเข้า และการส่งออกสาร HBCD <strong className="text-blue-500 dark:text-blue-300">โดยมีข้อยกเว้นเฉพาะด้าน (specific exemptions) สำหรับการผลิตในประเทศภาคีสมาชิกที่มีรายชื่อในบัญชีรายชื่อประเทศที่ขอรับการยกเว้น (register of specific exemptions) และสำหรับการใช้งานในโฟม EPS และ XPS ในงานอาคาร โดยภาคีสมาชิกจะต้อง ดำเนินมาตรการที่จำเป็นเพื่อให้มั่นใจว่าจะสามารถบ่งชี้ (identify) โฟม EPS และ XPS ที่มีสาร HBCD ในตัวได้โดยง่ายตลอดวงชีวิตของโฟม</strong> โดย “มาตรการที่จำเป็น” ครอบคลุมการปฏิบัติตามคำแนะนำ เทคนิคที่ดีที่สุดและแนวการปฏิบัติด้านสิ่งแวดล้อมที่ดีที่สุด (Best available technique and best environmental practices: BAT & BEP) สำหรับการจัดการสาร HBCD (<Link href={`${baseURL}#ref16`}>UNEP 2021a</Link>) และเนื่องจากขยะที่ปนเปื้อนสาร POPs เกินค่าขีดจำกัดต่ำสุดของสารนั้นๆ (Low POPs contents) ถือเป็นขยะอันตรายภายใต้อนุสัญญาบาเซล2 ประเทศภาคีสมาชิกอนุสัญญาเบเซลทุกประเทศจึงมีพันธกรณีที่จะต้องลดการก่อขยะเหล่านี้3 พร้อมทั้งต้องมีการดำเนินการให้มั่นใจว่ามีสถานจัดการขยะที่เกี่ยวข้องอย่างเพียงพอ และทำให้มั่นใจว่าจะมีการจัดการขยะเหล่านี้อย่างถูกหลักวิชาการ ซึ่งการดำเนินการดังกล่าว ครอบคลุมการปฏิบัติตามคำแนะนำด้านเทคนิคทั่วไปในการการจัดการขยะที่ปนเปื้อนสาร POPs (<Link href={`${baseURL}#ref15`}>UNEP 2019</Link>) และคำแนะนำด้านเทคนิคในการจัดการขยะที่ปนเปื้อน HBCD อย่างถูกวิธี (<Link href={`${baseURL}#ref18`}>UNEP 2022</Link>)  
</p><p>
แม้การขึ้นบัญชีสาร HBCD เป็นสาร POPs ที่ต้องกำจัดตามอนุสัญญาสตอกโฮล์ม จะนำไปสู่การเลิกผลิตสาร HBCD ในเชิงพาณิชย์แล้วในทั่วโลก หากแต่การรั่วไหลของสาร HBCD ลงสู่สิ่งแวดล้อมจะยังมีแนวโน้มสูงขึ้นเรื่อยๆ เนื่องจากยังมีสาร HBCD ที่ผลิตขึ้นมา ส่วนใหญ่ยังคงค้างอยู่ในโฟม SE-EPS ที่ยังใช้งานอยู่ในอาคารที่จะทะยอยหมดอายุและถูกรื้อถอนอย่างต่อเนื่องต่อไปในอนาคต กอรปกับแรงผลักดันการพัฒนาเทคโนโลยีเพื่อมุ่งสู่ระบบเศรษฐกิจหมุนเวียน ซึ่งจะทำให้มีการนำชิ้นส่วน/วัสดุ ซึ่งรวมถึงแผ่นโฟมและโฟม EPS กลับมาใช้ซ้ำและรีไซเคิลมากขึ้น ความเสี่ยงจากสาร HBCD จึงยังจะเพิ่มสูงขึ้นเรื่อยๆ หากไม่มีการ บ่งชี้และแยกแยะแผ่นโฟมที่ปนเปื้อนสาร HBCD เพื่อสามารถควบคุมการรื้อถอน และการจัดการโฟมหลังการใช้งาน (End-of-life) อย่างถูกหลักวิชาการ ทั้งนี้ พบว่าปัจจุบันเริ่มมีการรีไซเคิลโฟม EPS สำหรับบรรจุภัณฑ์ (<Link href={`${baseURL}#ref06`}>European Commission 2019</Link>) มีการนำแผ่นโฟมฉนวนอาคารไปใช้ซ้ำในงานอื่น เช่น ทำเป็นทุ่นลอยน้ำ ทำเป็นกระถางต้นไม้ รวมถึงการตรวจพบ โฟมบรรจุภัณฑ์ที่มีสาร HBCD ปนเปื้อนแล้ว (<Link href={`${baseURL}#ref10`}>Rani et al. 2014</Link>; <Link href={`${baseURL}#ref01`}>M. A. Abdallah et al. 2018</Link>) 
</p><p>
ประเทศไทย ไม่เคยมีการผลิตสาร HBCD ในเชิงพาณิชย์ แต่เคยมีการนำเข้ามาเพื่อใช้ ผสมในเม็ดโฟม EPS เพื่อผลิตเป็นโฟม EPS เกรดไม่ลามไฟ จากการสืบค้นข้อมูลจากกรมโรงงานอุตสาหกรรม พบว่าไม่มีรายงานการนำเข้าสารนี้มาตั้งแต่ปีพ.ศ. 2561 และเนื่องจากปัจจุบันผู้ผลิตทั่วโลกได้ยกเลิกการผลิตสาร HBCD แล้วจึงเชื่อว่าจะไม่มีการนำเข้าสาร HBCD เพื่อประโยชน์ในเชิงพาณิชย์แล้ว ความเสี่ยงในปลดปล่อยสาร HBCD ออกสู่สิ่งแวดล้อม จึงอยู่ในขั้นตอนการซ่อมแซม/การรื้อถอนอาคาร การจัดการเศษวัสดุและป้องกันไม่ให้วัสดุที่ปนเปื้อนสาร HBCD กระจายไปปะปนกับวัสดุอื่นซึ่งจะทำให้เกิดการปนเปื้อนในวงกว้าง ซึ่งจะทำให้ระดับความเสี่ยงและภาระในการบำบัดเพิ่มสูงขึ้นเป็นทวีคูณ และการกำจัดสาร HBCD ให้ได้อย่างสิ้นซาก (irreversible destruction) ซึ่งปัจจุบัน ได้มีการพัฒนาเทคโนโลยีที่สามารถกำจัด HBCD ได้อย่างสิ้นซาก โดยยังคงสามารถหมุนเวียนโพลิสไตรีนกลับมาใช้ประโยชน์เพื่อทดแทนการใช้วัสดุจากแหล่งปฐมภูมิ (Virgin materials) ได้  หากแต่ยังไม่มีการพัฒนาและ/หรือการนำเทคโนโลยีสาขานี้มาใช้ในประเทศ  
</p><p>
ดังนั้น เพื่อลด/เลี่ยง การปลดปล่อยสาร HBCD ออกสู่สิ่งแวดล้อม และลดโอกาสการได้รับสัมผัสสาร HBCD จากการรื้อถอนหรือปรับปรุงอาคารที่มีสาร HBCD สิ่งสำคัญลำดับต้นๆ ที่ควรเร่งดำเนินการคือ<strong className="text-blue-500 dark:text-blue-300">การเร่งสำรวจและเครื่องหมายเพื่อบ่งชี้โฟมที่มี HBCD ในตัวตามที่ระบุในเงื่อนไขการให้การยกเว้นของอนุสัญญาสตอกโฮล์ม รวมทั้งการพัฒนาและเผยแพร่แนวทางปฏิบัติที่เหมาะสมเพื่อให้ผู้ที่เกี่ยวข้องสามารถป้องกันตัวและป้องกันการปลดปล่อยได้อย่างถูกต้องเหมาะสม</strong> นอกจากนี้ ยังควรเตรียมความพร้อมในเชิงเทคโนโลยี เพื่อนำโฟมที่ถูกรื้อถอนไปกำจัดสาร HBCD ให้ได้อย่างปลอดภัย สอดคล้องกับแนวทางปฏิบัติของอนุสัญญาบาเซล และสอดรับกับแผนการพัฒนาประเทศเพื่อมุ่งสู่ระบบเศรษฐกิจหมุนเวียนต่อไป       </p>
    </section>
  );
}
