function template(name, id, membership_name) {
    let res;
    switch (membership_name) {
        case 'WeMedi M1':
            res = `<!DOCTYPE html>
            <html>
            
            <head>
                <style>
                    body {
                        font-family: Arial;
                    }
                </style>
            </head>
            
            <body>
                <div
                    style="border-left: 3px solid #CCCCCC;border-right: 3px solid #CCCCCC;border-top: 8px solid #3174CC;max-width: 1024px;width: 100%;">
                    <div style="
                text-align: center;
                padding: 40px;
            "><br><br>
                        <img src="https://ci3.googleusercontent.com/proxy/z_88WpX6cQ7GZfVuuSLpDIOpZ9pNbnawlxI5BrM3KyAgNUVzdS8aRK13p4264fbQ2IHJkRtM7FL3yhKh=s0-d-e1-ft#https://img2.anpasia.com/Blue/newlogo.png" style="margin-top: 20px; max-width: 150px">
                    </div>
                    <div style="
                padding-left: 20px;
                padding-right: 20px;
            ">
                        <p>親愛的  ${name} :</p>
                        <p>保單編號: ${id}</p>
                        <p>恭喜您成功啟用Blue WeMedi 門診保！此電郵能夠幫助您了解如何使用門診服務。</p>
                        <br>
                        <h3>如何使用門診服務</h3>
                        <p>1. 搜尋醫生：從我們的醫療網絡中選擇合適的醫生就診，詳細的醫療網絡資料可在此電郵的附件中查閱。醫生目錄或不時更新。</p>
                        <p>2. 提供WeMedi門診保的保單編號：在預約及登記就診時，謹記出示電郵中的WeMedi門診保電子醫療卡及您的香港身份證，以便診所登記及享用診症優惠費用。</p>
                        <p>3. 支付診症優惠費用：完成診症後，於診所直接支付WeMedi門診保專享之診症優惠費用。 </p>
                        <p>Blue WeMedi手機應用程式將會在不久的將來面世，屆時我們將會發送一封電郵為您設定密碼以及啟用您的 Blue WeMedi 手機應用程式帳號。</p>
                        <p>WeMedi 門診保受其保單條款約束，有關產品之保障權益及條款、全部不保事項及主要風險詳情請參考WeMedi 門診保之產品概要及保單條款。</p>
                        <br>
                        <h3>服務查詢</h3>
                        <p>如有任何有關保險產品資料的查詢，請在辦公時間內（星期一至五，早上九時至下午五時半）聯絡Blue的客戶服務專員致電 <a href="tel:852-3929-3929">+852 3929 3929</a> 或瀏覽 <a
                                href="https://www.blue.com.hk/" target="_blank">https://www.blue.com.hk/</a> 。 </p>
                        <p>如有任何有關門診服務及醫療網絡資料的查詢，請在辦公時間內（星期一至日，早上九時至晚上十二時）聯絡醫療服務供應商（維健醫務有限公司）的客戶服務專員致電 <a href="tel:852-2158-2600">+852 2158 2600</a> 或瀏覽 <a
                                href="https://www.hmmp.com.hk/" target="_blank">https://www.hmmp.com.hk/</a> 。 </p><br>
                        <p>Blue Insurance Limited 謹啟</p><br>
                        <p>**這是一封系統郵件，請不要回覆。**</p>
                        <br><br>
                        <p>Dear ${name},</p>
                        <p>Policy ID : ${id}</p>
                        <p>Congratulations! You have successfully activated Blue WeMedi Outpatient Protector. This email helps you to understand how to use the Outpatient Service.</p>
                        <h3>How to use the Outpatient Service</h3>
                        <p >1. Find Doctor: Use the panel doctor list attached in this email to find the suitable doctor in our medical network; Doctor list would be updated from time to time. </p>
                        <p >2. Provide WeMedi Outpatient Protector policy number: Please call the clinic to make an appointment first. Present the WeMedi Outpatient Protector E-medical Card attached in this email and your Hong Kong identity card upon arrival at the clinic in order to enjoy the Preferential Consultation Charge.</p>
                        <p >3. Payment of services: Pay the Preferential Consultation Charge under WeMedi Outpatient Protector at the clinic.
                            <br><br>Blue WeMedi mobile app will be available for download shortly. By then you will receive an email for your password set-up and Blue WeMedi mobile app account activation.
                           </p>
                        <p>WeMedi Outpatient Protector is bound by its Policy Provision. For the full terms and benefits of the policy, key product risks, full lists of exclusions, please refer to Product Summary and Policy Provision of WeMedi Outpatient Protector. </p>
                        <br>
                        <h3>Got any questions?</h3>
                        <p>Should you have question about the insurance product, please contact Blue service hotline within the office hours (from Monday to Friday, 09:00am to 05:30pm) on <a href="tel:852-3929-3929">+852 3929 3929</a> or visit <a
                            href="https://www.blue.com.hk/" target="_blank">https://www.blue.com.hk/</a> anytime.</p>
                        <p>For any question about the doctor list and outpatient service, please contact our medical service provider (HMMP Limited) within the office hours (from Monday to Sunday, 09:00am to 00:00am) on <a href="tel:852-2158-2600">+852 2158 2600</a> or visit <a
                            href="https://www.hmmp.com.hk/" target="_blank">https://www.hmmp.com.hk/</a> anytime.</p><br>
                        <p>Best Regards,<br>Blue Insurance Limited
                        </p><br>
                        <p>** THIS IS AN AUTOMATED EMAIL. PLEASE DO NOT REPLY DIRECTLY TO THIS EMAIL.**</p>
                        <br>
                        <br>
                    </div>
            
                    <div style="background-color: #435667; padding: 20px">
                        <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif;line-height:32px">
                            <span
                                style="font-size:12pt;line-height:22.6667px;font-family:'Source Sans Pro';color:rgb(70,86,101)"><a
                                    href="https://www.blue.com.hk/online/publish/en/PrivacyPolicy/privacy-policy.html"
                                    style="color:rgb(48,48,48)" target="_blank"
                                    data-saferedirecturl="https://www.google.com/url?q=https://www.blue.com.hk/online/publish/en/PrivacyPolicy/privacy-policy.html&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw2Qukxk-aLy4nv51Y3if90q"><span
                                        style="color:white">Privacy
                                        Policy</span></a>&nbsp;I&nbsp;<a
                                    href="https://www.blue.com.hk/online/publish/en/GetHelp/contact-us/contact-us.html"
                                    style="color:rgb(48,48,48)" target="_blank"
                                    data-saferedirecturl="https://www.google.com/url?q=https://www.blue.com.hk/online/publish/en/GetHelp/contact-us/contact-us.html&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw0aJrGMvSUpSwbTh4guApzv"><span
                                        style="color:white">Contact
                                        Us</span></a>&nbsp;I&nbsp;<br></span><span
                                style="font-size:12pt;line-height:22.6667px;font-family:'Source Sans Pro';color:white">Copyright
                                ©2020 Blue Insurance Limited</span><span
                                style="font-size:12pt;line-height:22.6667px;font-family:'Source Sans Pro';color:rgb(70,86,101)"><u></u><u></u></span>
                        </p>
                        <div align="center" style="margin-top: 10px;">
                            <table style="width:94.5pt;border-collapse:collapse" width="0" cellspacing="0" cellpadding="0"
                                border="0">
                                <tbody>
                                    <tr>
                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="37">
                                            <p class="MsoNormal"
                                                style="font-size:12pt;font-family:'Times New Roman',serif;text-align:center"
                                                align="center"><span style="color:rgb(48,48,48)"><img
                                                        id="m_-1290618627586113483_x0000_i1028"
                                                        src="https://ci6.googleusercontent.com/proxy/-bGCkup3AE6s7oQfbvdKM2h7ODb3NlogBNwIPbszb-_Ys_aRCn1VgIVambCo3hzd9t5p3dTpRBNqOLEQmbRRqpxzl8MgOOdrBQ=s0-d-e1-ft#https://customers.anpasia.com/Blue/1907_CT/wc_icon.png"
                                                        style="line-height:16px;border:none!important;outline:0px!important"
                                                        class="CToWUd" width="22" height="22" border="0"
                                                        align="middle"></span><u></u><u></u>
                                            </p>
                                        </td>
                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="100">
                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif">
                                                <span
                                                    style="font-size:12pt;font-family:'Source Sans Pro';color:white">ID:bluehongkong</span><u></u><u></u>
                                            </p>
                                        </td>
                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="37">
                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif">
                                                <a href="https://www.facebook.com/bluehkinsurance/" style="color:rgb(48,48,48)"
                                                    target="_blank"
                                                    data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/bluehkinsurance/&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw3Npv7a75LCQTKRG7sgzDhQ"><span
                                                        style="text-decoration:none"><img id="m_-1290618627586113483_x0000_i1029"
                                                            src="https://ci3.googleusercontent.com/proxy/NXcZvG4Xw8regajpB1kpPBoeP4jo0DNfCiSQB0oIxCYjbW3kp-JeQpVsD35CjlQ-VCafKYrtaAq_Glgl_1Y_mjDP-ghcksbX=s0-d-e1-ft#http://customers.anpasia.com/Blue/1907_CT/fb_icon.png"
                                                            style="line-height:16px;border:none!important;outline:0px!important;text-decoration:none!important"
                                                            class="CToWUd" width="22" height="22" border="0"
                                                            align="middle"></span></a><u></u><u></u>
                                            </p>
                                        </td>
                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="37">
                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif">
                                                <a href="https://www.instagram.com/bluehkinsurance/" style="color:rgb(48,48,48)"
                                                    target="_blank"
                                                    data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/bluehkinsurance/&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw3OgOJIfKFQ8n9uEUZDuSb_"><span
                                                        style="text-decoration:none"><img id="m_-1290618627586113483_x0000_i1030"
                                                            src="https://ci5.googleusercontent.com/proxy/vze6QSKUI1viUNIZSrFi0gRinLNa1HphK6mWRyqTWpJgJw2StT_QKjGdqP1J7gDyG0TFn5tXK3IW1zNmS-NrZ8BLZk7Dif0h=s0-d-e1-ft#http://customers.anpasia.com/Blue/1907_CT/ig_icon.png"
                                                            style="line-height:16px;border:none!important;outline:0px!important;text-decoration:none!important"
                                                            class="CToWUd" width="22" height="22" border="0"
                                                            align="middle"></span></a><u></u><u></u>
                                            </p>
                                        </td>
                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="37">
                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif">
                                                <a href="https://www.linkedin.com/company/bluehkinsurance"
                                                    style="color:rgb(48,48,48)" target="_blank"
                                                    data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/company/bluehkinsurance&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw2X3ADIcJeFAmhGYnlRn_EC"><span
                                                        style="text-decoration:none"><img id="m_-1290618627586113483_x0000_i1031"
                                                            src="https://ci3.googleusercontent.com/proxy/z33Bzfpe_zkGs-oOVTNes0PsULQkumTUv-todS8jUKjnIVHWY41ATN2ttmYkV-hHdGz7_nPJKqYITKt0GPrJrvOKVP8BNT7o3w=s0-d-e1-ft#http://customers.anpasia.com/Blue/1907_CT/lki_icon.png"
                                                            style="line-height:16px;border:none!important;outline:0px!important;text-decoration:none!important"
                                                            class="CToWUd" width="22" height="22" border="0"
                                                            align="middle"></span></a><u></u><u></u>
                                            </p>
                                        </td>
                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="37">
                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif">
                                                <a href="https://www.youtube.com/bluehkinsurance" style="color:rgb(48,48,48)"
                                                    target="_blank"
                                                    data-saferedirecturl="https://www.google.com/url?q=https://www.youtube.com/bluehkinsurance&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw3GQDXJGFF5FnLS-nbHOzv7"><span
                                                        style="text-decoration:none"><img id="m_-1290618627586113483_x0000_i1032"
                                                            src="https://ci3.googleusercontent.com/proxy/XgeVLvndmPktSGneN7zybVMt5byr53gAFBiZRIxQ0z08wLsqUVrAmWv17XgdfU2-OPPKkutBa5asLVFWKse37ybwHe36gRcH=s0-d-e1-ft#http://customers.anpasia.com/Blue/1907_CT/yt_icon.png"
                                                            style="line-height:16px;border:none!important;outline:0px!important;text-decoration:none!important"
                                                            class="CToWUd" width="22" height="22" border="0"
                                                            align="middle"></span></a></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </body>
            
            </html>`
            break;
        case 'WeMedi Lite':
            res = `<!DOCTYPE html>
                    <html><head></head><body>
                        <div id=":me" class="ii gt">
                            <div id=":md" class="a3s aiL " style="display: flex; justify-content: center; width: 100%;">
                                <div style="word-wrap:break-word;line-break:after-white-space; max-width: 550pt;">
                                    <table style="font-family:Times;background-color:rgb(251,253,251);/* width:1369px; */border-collapse:collapse;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td style="padding:0cm" valign="top">
                                                    
                                                    
                                                    <div align="center">
                                                        <table style="width: 100%;background-color:white;border-collapse:collapse;border:none;background-position:initial initial;background-repeat:initial initial;" width="0" cellspacing="0" cellpadding="0" border="1">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="border-top-width:4.5pt;border-style:solid solid none;border-top-color:rgb(49,116,204);border-left-width:1.5pt;border-left-color:rgb(204,204,204);border-right-width:1.5pt;border-right-color:rgb(204,204,204);padding:22.5pt">
                                                                        <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif;text-align:center" align="center"><a href="https://www.blue.com.hk/en?utm_campaign=ops-gnr-bau&amp;utm_medium=email&amp;utm_source=edm&amp;utm_content=Generic_generic_welcome_email_generic_30001" style="color:rgb(48,48,48)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.blue.com.hk/en?utm_campaign%3Dops-gnr-bau%26utm_medium%3Demail%26utm_source%3Dedm%26utm_content%3DGeneric_generic_welcome_email_generic_30001&amp;source=gmail&amp;ust=1605252827160000&amp;usg=AOvVaw3KyJT1YUCJFPdqZwEsHm6_"><span style="text-decoration:none"><img id="m_-1290618627586113483_x0000_i1025" src="https://ci3.googleusercontent.com/proxy/z_88WpX6cQ7GZfVuuSLpDIOpZ9pNbnawlxI5BrM3KyAgNUVzdS8aRK13p4264fbQ2IHJkRtM7FL3yhKh=s0-d-e1-ft#https://img2.anpasia.com/Blue/newlogo.png" style="line-height:16px;border:none!important;outline:0px!important;text-decoration:none!important" class="CToWUd" width="130" border="0" align="middle"></span></a><u></u><u></u></p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    
                                                    <div align="center">
                                                        <table style="width: 100%;border-collapse:collapse;border:none;margin: 0px;" width="0" cellspacing="0" cellpadding="0" border="1">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="border-style:none solid;border-left-width:1.5pt;border-left-color:rgb(204,204,204);border-right-width:1.5pt;border-right-color:rgb(204,204,204);padding:0cm 0cm 11.25pt">
                                                                        <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif;text-align:center;margin: 0;" align="center"><a href="https://www.blue.com.hk/online/index.do?utm_source=edm&amp;utm_campaign=brd-wc-crs&amp;utm_medium=email&amp;utm_content=Generic_remarketing_obc_email_50dollar-esso_40005" style="color:rgb(48,48,48)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.blue.com.hk/online/index.do?utm_source%3Dedm%26utm_campaign%3Dbrd-wc-crs%26utm_medium%3Demail%26utm_content%3DGeneric_remarketing_obc_email_50dollar-esso_40005&amp;source=gmail&amp;ust=1605252827160000&amp;usg=AOvVaw2oehJRmO-1VmKV6upkXuOQ"><span style="text-decoration:none"><img id="m_-1290618627586113483_x0000_i1026" src="https://ci6.googleusercontent.com/proxy/UwzmCC2aJilScWJdB8LuOidLtbAM5n4-DDtCD_3xFGuUuQP7GxdfiepnuB95tOjIeAM4yIoeU9wwIvWrap0gN7fKT-19MXASwuRiFTJl_pE=s0-d-e1-ft#https://img2.anpasia.com/Blue/Welcome_email_eDM_600_final.jpg" alt="Blue為香港首家網上人壽保險公司" style="width: 100%;line-height:16px;border:none!important;outline:0px!important;text-decoration:none!important;" class="CToWUd" width="596" border="0" align="middle"></span></a></p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    
                                                    <div align="center">
                                                        <table style="width: 100%;background-color:white;border-collapse:collapse;border:none;background-position:initial initial;background-repeat:initial initial;" width="0" cellspacing="0" cellpadding="0" border="1">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="border-style:none solid;border-left-width:1.5pt;border-left-color:rgb(204,204,204);border-right-width:1.5pt;border-right-color:rgb(204,204,204);padding:0cm 15pt 11.25pt" valign="top">
                                                                        <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif;margin-bottom:12pt">
                                                                            <b><span style="font-family:'Source Sans Pro';color:rgb(70,86,101)">Dear
                                                                                    ${name},</span></b><span style="font-family:'Source Sans Pro';color:rgb(70,86,101)"><br><br></span>
                                                                        </p>
                                                                        <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif;margin-bottom:12pt">
                                                                            <span style="font-family:'Source Sans Pro';color:rgb(70,86,101)">Membership
                                                                                ID : ${id}</span></p>
                                                                        <p class="MsoNormal"><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">親愛的客戶：</span></p>
                                                                        <p class="MsoNormal"><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">恭喜你成功啟用</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">Blue</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">&nbsp;</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">WeMedi
                                                                                Lite&nbsp;</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-TW">門診服務</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">！此電郵能夠幫助你了解如何使用</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-TW">服務</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">。</span></p>
                                                                        <p class="MsoNormal"><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">如何使用</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">&nbsp;</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">WeMedi
                                                                                Lite&nbsp;</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">門診服務</span></p>
                                                                        <p class="MsoNormal"><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">1.&nbsp;</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">搜尋醫生：從我們的醫療網絡中選擇合適的醫生就診，詳細的<b><wbr>醫療網絡資料</b>可在此電郵的附件中查閱。醫生目錄</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-HK">或不時</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">更新。</span></p>
                                                                        <p class="MsoNormal"><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">2.&nbsp;<span lang="ZH-CN">提供</span>WeMedi Lite<span lang="ZH-CN">編號：登記成為</span>WeMedi Lite<span lang="ZH-CN">會員後，會在此電郵收到一</span></span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">張電子醫療卡</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">以及一個</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">WeMe<wbr>di Lite<span lang="ZH-CN">會員編號。預約及登記就診時，謹記出示</span>WeMedi
                                                                                Lite&nbsp;</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">電子醫療卡及香港身</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">份證，以便診所</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">登記及計</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">算實際所需<wbr>支付的醫療費用。</span></p>
                                                                        <p class="MsoNormal"><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">3.&nbsp;</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">支付診症優惠費用：</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">完成診症後，於</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">診所直接支付</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">WeMed<wbr>i Lite</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">專享之診症優惠費用。</span><span style="font-family:'Source Han Sans CN Regular',sans-serif;font-size:10pt">&nbsp;</span>
                                                                        </p>
                                                                        <p class="MsoNormal"><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">WeMedi
                                                                                Lite</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">受條款及細則約束，詳情請參考附件中的</span><b><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">WeMedi
                                                                                    Lite&nbsp;</span></b><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">之條款及細則。如有任何</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-HK">有</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-TW">關門診服務</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-HK">及醫療網絡資料的</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN"><wbr>查詢，請在辦工時間內（星期一至日，早上九時至晚上十二時）聯絡</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN"><wbr>醫療服務</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">供應商（維健醫務有限公司）的客戶服務專員致電</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">&nbsp;<wbr>2158 2600</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">或瀏覽</span><a href="https://www.hmmp.com.hk/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.hmmp.com.hk/&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw3FHJpXY4HJLY3gZQaDXzif"><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif;color:rgb(17,85,204)">https://www.hmmp.com.<wbr>hk/</span></a><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">&nbsp;</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-CN">。</span><span style="font-size:11pt;font-family:'Source Han Sans CN Regular',sans-serif"><u></u><u></u></span>
                                                                        </p>
                                                                        <div><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">&nbsp;</span><br>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    
                                                    <div align="center">
                                                        <table style="width: 100%;background-color:white;border-collapse:collapse;border:none;background-position:initial initial;background-repeat:initial initial;" width="0" cellspacing="0" cellpadding="0" border="1">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="border-style:none solid;border-left-width:1.5pt;border-left-color:rgb(204,204,204);border-right-width:1.5pt;border-right-color:rgb(204,204,204);padding:0cm 15pt 11.25pt" valign="top">
                                                                        <p class="MsoNormal"><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif">Blue
                                                                                Insurance Limited&nbsp;</span><span style="font-size:10pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="ZH-HK">謹啟</span><span style="font-size:11pt;font-family:'Source Han Sans CN Regular',sans-serif" lang="EN-US"><u></u><u></u></span></p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    
                                                    <div align="center">
                                                        <table style="width: 100%;background-color:white;border-collapse:collapse;border:none;background-position:initial initial;background-repeat:initial initial;" width="0" cellspacing="0" cellpadding="0" border="1">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="border-style:none solid;border-left-width:1.5pt;border-left-color:rgb(204,204,204);border-right-width:1.5pt;border-right-color:rgb(204,204,204);padding:0cm 15pt" valign="top">
                                                                        <div align="center">
                                                                            <table style="width: 100%;border-collapse:collapse;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="padding:0cm" valign="top">
                                                                                            <div align="center">
                                                                                                <table style="width: 100%;border-collapse:collapse;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td style="width:9pt;padding:0cm" width="35" valign="top">
                                                                                                                <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif;line-height:22.4px">
                                                                                                                    <span style="font-size:8.5pt;line-height:15.8667px;font-family:Arial,sans-serif;color:rgb(70,86,101)">NOTE:<u></u><u></u></span>
                                                                                                                </p>
                                                                                                            </td>
                                                                                                            <td style="padding:0cm" valign="top">
                                                                                                                <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif;line-height:22.4px">
                                                                                                                    <span style="font-size:8.5pt;line-height:15.8667px;font-family:Arial,sans-serif;color:rgb(70,86,101)">This
                                                                                                                        is a computer
                                                                                                                        generated email.
                                                                                                                        Please do not reply
                                                                                                                        to this email
                                                                                                                        address.<u></u><u></u></span>
                                                                                                                </p>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    
                                                    
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table style="font-family:Times;background-color:rgb(251,253,251);/* width:1369px; */border-collapse:collapse;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td style="padding:0cm" valign="top">
                                                    
                                                    
                                                    <div align="center">
                                                        <table style="width: 100%;background-color:rgb(67,86,103);border-collapse:collapse;border:none;background-position:initial initial;background-repeat:initial initial;" width="0" cellspacing="0" cellpadding="0" border="1">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="border-style:none solid;border-left-width:1.5pt;border-left-color:rgb(204,204,204);border-right-width:1.5pt;border-right-color:rgb(204,204,204);padding:7.5pt 15pt 11.25pt">
                                                                        <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif;line-height:32px">
                                                                            <span style="font-size:8.5pt;line-height:22.6667px;font-family:'Source Sans Pro';color:rgb(70,86,101)"><a href="https://www.blue.com.hk/online/publish/en/PrivacyPolicy/privacy-policy.html" style="color:rgb(48,48,48)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.blue.com.hk/online/publish/en/PrivacyPolicy/privacy-policy.html&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw2Qukxk-aLy4nv51Y3if90q"><span style="color:white">Privacy
                                                                                        Policy</span></a>&nbsp;I&nbsp;<a href="https://www.blue.com.hk/online/publish/en/GetHelp/contact-us/contact-us.html" style="color:rgb(48,48,48)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.blue.com.hk/online/publish/en/GetHelp/contact-us/contact-us.html&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw0aJrGMvSUpSwbTh4guApzv"><span style="color:white">Contact
                                                                                        Us</span></a>&nbsp;I&nbsp;<span style="color:rgb(48,48,48);text-decoration:underline"><span style="color:white">Unsubscribe</span></span><br></span><span style="font-size:8.5pt;line-height:22.6667px;font-family:'Source Sans Pro';color:white">Copyright
                                                                                ©2020 Blue Insurance Limited</span><span style="font-size:8.5pt;line-height:22.6667px;font-family:'Source Sans Pro';color:rgb(70,86,101)"><u></u><u></u></span>
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    
                                                    <div align="center">
                                                        <table style="width: 100%;background-color:rgb(67,86,103);border-collapse:collapse;border:none;background-position:initial initial;background-repeat:initial initial;" width="0" cellspacing="0" cellpadding="0" border="1">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="border-style:none solid;border-left-width:1.5pt;border-left-color:rgb(204,204,204);border-right-width:1.5pt;border-right-color:rgb(204,204,204);padding:18.75pt 0cm 18.75pt 11.25pt" valign="top">
                                                                        <div align="center">
                                                                            <table style="width:94.5pt;border-collapse:collapse" width="0" cellspacing="0" cellpadding="0" border="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="37">
                                                                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif;text-align:center" align="center"><span style="color:rgb(48,48,48)"><img id="m_-1290618627586113483_x0000_i1028" src="https://ci6.googleusercontent.com/proxy/-bGCkup3AE6s7oQfbvdKM2h7ODb3NlogBNwIPbszb-_Ys_aRCn1VgIVambCo3hzd9t5p3dTpRBNqOLEQmbRRqpxzl8MgOOdrBQ=s0-d-e1-ft#https://customers.anpasia.com/Blue/1907_CT/wc_icon.png" style="line-height:16px;border:none!important;outline:0px!important" class="CToWUd" width="22" height="22" border="0" align="middle"></span><u></u><u></u>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="100">
                                                                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif">
                                                                                                <span style="font-size:9pt;font-family:'Source Sans Pro';color:white">ID:bluehongkong</span><u></u><u></u>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="37">
                                                                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif">
                                                                                                <a href="https://www.facebook.com/bluehkinsurance/" style="color:rgb(48,48,48)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/bluehkinsurance/&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw3Npv7a75LCQTKRG7sgzDhQ"><span style="text-decoration:none"><img id="m_-1290618627586113483_x0000_i1029" src="https://ci3.googleusercontent.com/proxy/NXcZvG4Xw8regajpB1kpPBoeP4jo0DNfCiSQB0oIxCYjbW3kp-JeQpVsD35CjlQ-VCafKYrtaAq_Glgl_1Y_mjDP-ghcksbX=s0-d-e1-ft#http://customers.anpasia.com/Blue/1907_CT/fb_icon.png" style="line-height:16px;border:none!important;outline:0px!important;text-decoration:none!important" class="CToWUd" width="22" height="22" border="0" align="middle"></span></a><u></u><u></u>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="37">
                                                                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif">
                                                                                                <a href="https://www.instagram.com/bluehkinsurance/" style="color:rgb(48,48,48)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/bluehkinsurance/&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw3OgOJIfKFQ8n9uEUZDuSb_"><span style="text-decoration:none"><img id="m_-1290618627586113483_x0000_i1030" src="https://ci5.googleusercontent.com/proxy/vze6QSKUI1viUNIZSrFi0gRinLNa1HphK6mWRyqTWpJgJw2StT_QKjGdqP1J7gDyG0TFn5tXK3IW1zNmS-NrZ8BLZk7Dif0h=s0-d-e1-ft#http://customers.anpasia.com/Blue/1907_CT/ig_icon.png" style="line-height:16px;border:none!important;outline:0px!important;text-decoration:none!important" class="CToWUd" width="22" height="22" border="0" align="middle"></span></a><u></u><u></u>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="37">
                                                                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif">
                                                                                                <a href="https://www.linkedin.com/company/bluehkinsurance" style="color:rgb(48,48,48)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.linkedin.com/company/bluehkinsurance&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw2X3ADIcJeFAmhGYnlRn_EC"><span style="text-decoration:none"><img id="m_-1290618627586113483_x0000_i1031" src="https://ci3.googleusercontent.com/proxy/z33Bzfpe_zkGs-oOVTNes0PsULQkumTUv-todS8jUKjnIVHWY41ATN2ttmYkV-hHdGz7_nPJKqYITKt0GPrJrvOKVP8BNT7o3w=s0-d-e1-ft#http://customers.anpasia.com/Blue/1907_CT/lki_icon.png" style="line-height:16px;border:none!important;outline:0px!important;text-decoration:none!important" class="CToWUd" width="22" height="22" border="0" align="middle"></span></a><u></u><u></u>
                                                                                            </p>
                                                                                        </td>
                                                                                        <td style="width:0.3pt;padding:0cm 11.25pt 0cm 0cm" width="37">
                                                                                            <p class="MsoNormal" style="font-size:12pt;font-family:'Times New Roman',serif">
                                                                                                <a href="https://www.youtube.com/bluehkinsurance" style="color:rgb(48,48,48)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.youtube.com/bluehkinsurance&amp;source=gmail&amp;ust=1605252827161000&amp;usg=AOvVaw3GQDXJGFF5FnLS-nbHOzv7"><span style="text-decoration:none"><img id="m_-1290618627586113483_x0000_i1032" src="https://ci3.googleusercontent.com/proxy/XgeVLvndmPktSGneN7zybVMt5byr53gAFBiZRIxQ0z08wLsqUVrAmWv17XgdfU2-OPPKkutBa5asLVFWKse37ybwHe36gRcH=s0-d-e1-ft#http://customers.anpasia.com/Blue/1907_CT/yt_icon.png" style="line-height:16px;border:none!important;outline:0px!important;text-decoration:none!important" class="CToWUd" width="22" height="22" border="0" align="middle"></span></a></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    
                                    
                                    
                                </div>
                                
                                
                                
                            </div>
                        </div>


                    </body></html>
                    `
            break;
    }

    return res;
}
module.exports = {
    template
};