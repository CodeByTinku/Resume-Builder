import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer';

// Register fonts if needed, otherwise use standard fonts
// Font.register({
//   family: 'Inter',
//   src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.ttf',
// });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica', // Default safe font
    paddingBottom: 30, 
  },
  header: {
    backgroundColor: '#0f172a', // slate-900
    color: '#ffffff',
    padding: 30,
    flexDirection: 'column',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 14,
    color: '#60a5fa', // blue-400
    marginBottom: 15,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 9,
    color: '#cbd5e1', // slate-300
    gap: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  body: {
    padding: 30,
    flexDirection: 'row',
  },
  leftColumn: {
    width: '65%',
    paddingRight: 20,
  },
  rightColumn: {
    width: '35%',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#0f172a',
    borderBottomWidth: 2,
    borderBottomColor: '#0f172a',
    paddingBottom: 3,
    marginBottom: 10,
    letterSpacing: 1.5,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#334155', // slate-700
  },
  entry: {
    marginBottom: 12,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 2,
  },
  position: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1e293b', // slate-800
  },
  date: {
    fontSize: 9,
    fontStyle: 'italic',
    color: '#64748b', // slate-500
  },
  company: {
    fontSize: 10,
    color: '#1d4ed8', // blue-700
    fontWeight: 'medium',
    marginBottom: 4,
  },
  description: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#334155',
  },
  skillItem: {
    fontSize: 9, // Small text for tag
    backgroundColor: '#f1f5f9', // slate-100
    padding: '4px 8px',
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 6,
    color: '#334155',
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

const ModernPDF = ({ resume }) => {
  const { personalInfo, experience, education, skills } = resume;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.fullName || 'YOUR NAME'}</Text>
          <Text style={styles.jobTitle}>{personalInfo.jobTitle || 'Professional Title'}</Text>
          
          <View style={styles.contactRow}>
            {personalInfo.email && <Text style={styles.contactItem}>{personalInfo.email}</Text>}
            {personalInfo.phone && <Text style={styles.contactItem}>{personalInfo.phone}</Text>}
            {personalInfo.address && <Text style={styles.contactItem}>{personalInfo.address}</Text>}
            {/* Links support */}
            {personalInfo.linkedin && <Link src={personalInfo.linkedin} style={{...styles.contactItem, color: '#cbd5e1'}}>{personalInfo.linkedin}</Link>}
            {personalInfo.website && <Link src={personalInfo.website} style={{...styles.contactItem, color: '#cbd5e1'}}>{personalInfo.website}</Link>}
          </View>
        </View>

        <View style={styles.body}>
            {/* Left Column */}
            <View style={styles.leftColumn}>
                {personalInfo.summary && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Profile</Text>
                    <Text style={styles.summary}>{personalInfo.summary}</Text>
                </View>
                )}

                {experience.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    {experience.map((exp) => (
                        <View key={exp.id} style={styles.entry}>
                            <View style={styles.entryHeader}>
                                <Text style={styles.position}>{exp.position}</Text>
                                <Text style={styles.date}>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</Text>
                            </View>
                            <Text style={styles.company}>{exp.company}</Text>
                            <Text style={styles.description}>{exp.description}</Text>
                        </View>
                    ))}
                </View>
                )}

                {education.length > 0 && (
                 <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Education</Text>
                     {education.map((edu) => (
                        <View key={edu.id} style={styles.entry}>
                             <View style={styles.entryHeader}>
                                <Text style={styles.position}>{edu.school}</Text>
                                <Text style={styles.date}>{edu.graduationDate}</Text>
                            </View>
                            <Text style={styles.company}>
                                {edu.degree} {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}
                            </Text>
                        </View>
                     ))}
                 </View>
                )}
            </View>

            {/* Right Column */}
            <View style={styles.rightColumn}>
                 {skills.length > 0 && (
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    <View style={styles.skillContainer}>
                        {skills.map((skill) => (
                            <Text key={skill.id} style={styles.skillItem}>{skill.name}</Text>
                        ))}
                    </View>
                </View>
                )}
            </View>
        </View>
      </Page>
    </Document>
  );
};

export default ModernPDF;
